// "use client";
import React, { useEffect, useRef, useState } from "react";
import "./global.css"
import { API_ROOT } from "./utils/Constents";

declare global {
    interface Window {
        grecaptcha: any;
    }
}

const CollBot = ({
    reCaptchaClientId,
    icon
}:
    {
        reCaptchaClientId?: string,
        icon: string,
    }) => {
    const [messages, setMessages] = useState<Array<{ sender: boolean; msg: string }>>([]);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleCaptchaVerification = async () => {
        if (window?.grecaptcha) {
            window.grecaptcha.ready(async () => {
                window.grecaptcha.execute(reCaptchaClientId, { action: "open_chat" }).then(async (token: any) => {
                    try {
                        const response = await fetch(API_ROOT + "/api/recaptcha", {
                            method: "POST",
                            body: JSON.stringify({ token }),
                            headers: { "Content-Type": "application/json" },
                        });
                        const data = await response.json();
                        if (data.success) {
                            setCaptchaVerified(true);
                            setIsOpen(true);
                        } else {
                            alert("Captcha verification failed. Please try again.");
                        }
                    } catch (error) {
                        console.error("Error verifying reCAPTCHA:", error);
                    }
                });
            });
        }
    };

    const sendMessage = async () => {
        if (!text.trim()) return;
        setMessages((old) => [...old, { sender: true, msg: text }]);
        setText("");
        setIsTyping(true);

        try {
            const api = await fetch(`${API_ROOT}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ msg: text, domain: window.location.origin }),
            });
            const json = await api.json();

            setMessages((old) => [...old, { sender: false, msg: json.answer }]);
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setIsTyping(false);
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);


    useEffect(() => {
        if (typeof window !== "undefined") {
            if (reCaptchaClientId) {

                const script = document.createElement("script");
                script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaClientId}`;
                script.async = true;
                document.body.appendChild(script);

                script.onload = () => {
                    setTimeout(() => {
                        const recaptchaBadge = document.querySelector(".grecaptcha-badge") as HTMLElement;
                        if (recaptchaBadge) {
                            recaptchaBadge.style.display = "none";
                        }
                    }, 500);
                };
            } else {
                setCaptchaVerified(true)
            }
        }
    }, []);

    return (
        <>
            {!isOpen && (
                <button onClick={toggleChat} style={styles.chatButton}>
                    <img src={icon} alt="" style={styles.chatIcon} />

                </button>
            )}

            {isOpen && (
                <div style={styles.chatContainer}>
                    <div style={styles.header}>
                        <img src={icon} alt="" style={styles.chatIcon} />
                        {/* <span> AI Chat</span> */}
                        <button onClick={toggleChat} style={styles.closeButton}>✖</button>
                    </div>

                    {captchaVerified ?
                        <>
                            <div style={styles.messageContainer}>
                                {messages.map((res, index) => (
                                    <div key={index} style={res.sender ? styles.userMessage : styles.botMessage}>
                                        {res.msg}
                                    </div>
                                ))}
                                {isTyping &&

                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px"
                                    }}>
                                        <img src="reddit.png" alt="" style={styles.chatIcon} />
                                        <div className="collbot-dot"></div>
                                        <div className="collbot-dot"></div>
                                        <div className="collbot-dot"></div>
                                    </div>}

                                <div ref={messagesEndRef}></div>
                            </div>

                            <div style={styles.inputContainer}>
                                <input
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                    type="text"
                                    placeholder="Type a message..."
                                    style={styles.input}
                                />
                                <button disabled={isTyping} onClick={sendMessage} style={styles.sendButton}>
                                    ➤
                                </button>
                            </div>
                        </>

                        : <div style={styles.captchaContainer}>
                            <div className="collbot-bounce" style={{ fontSize: "40px" }}>🔒</div>

                            <h2>Verify You’re Human</h2>
                            <button onClick={handleCaptchaVerification} style={styles.verifyButton}>✅ Verify & Start Chat</button>
                        </div>}
                </div>
            )}
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    chatButton: {
        position: "fixed", bottom: "10px", right: "10px", padding: "20px", fontSize: "20px", border: "none", borderRadius: "50%", cursor: "pointer"
    },
    chatContainer: {
        fontFamily: "'Roboto', sans-serif",
        position: "fixed",
        bottom: "50px",
        right: "20px",
        width: "350px",
        height: "400px",
        background: "white",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        borderBottomLeftRadius: "10px",
        borderTopRightRadius: "10px",
        display: "flex",
        gap: "15px",
        flexDirection: "column"
    },
    header: {
        background: "#6200ea", color: "white", padding: "10px", display: "flex", justifyContent: "space-between", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", alignItems: "center"
    },
    closeButton: { background: "none", border: "none", color: "white", fontSize: "18px", cursor: "pointer" },
    captchaContainer: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: "15px" },
    verifyButton: { background: "#6200ea", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" },
    messageContainer: { flex: "1", display: "flex", flexDirection: "column", overflowY: "auto", padding: "10px" },
    userMessage: { alignSelf: "flex-end", background: "#6200ea", color: "white", padding: "10px", borderRadius: "10px", marginBottom: "5px", maxWidth: "60%" },
    botMessage: { alignSelf: "flex-start", background: "#ddd", padding: "10px", borderRadius: "10px", marginBottom: "5px", maxWidth: "100%" },
    typingIndicator: { color: "gray", fontStyle: "italic" },
    inputContainer: { display: "flex", padding: "10px", borderTop: "1px solid #ccc" },
    input: { flex: 1, padding: "5px", border: "1px solid #ccc", borderRadius: "5px" },
    sendButton: { padding: "5px 10px", color: "blue", border: "none", borderRadius: "5px", cursor: "pointer" },
    chatIcon: {
        width: "30px",
        height: "30px",
        // marginRight: "10px",
        verticalAlign: "middle",
        // backgroundColor:"blue"
    },
};

export default CollBot;