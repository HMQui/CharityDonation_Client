import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DepositUnsuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        // Nếu bạn muốn tự động chuyển hướng sau vài giây
        const timer = setTimeout(() => {
            navigate("/balance");
        }, 5000); // chuyển hướng sau 5 giây

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Deposit Failed</h2>
                <p style={styles.message}>Something went wrong. Redirecting to your balance...</p>
                <button style={styles.button} onClick={() => navigate("/balance")}>
                    Go to Balance Now
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        padding: "1rem"
    },
    card: {
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        maxWidth: "400px",
        width: "100%"
    },
    title: {
        color: "#dc3545",
        marginBottom: "1rem"
    },
    message: {
        marginBottom: "1.5rem",
        fontSize: "1rem",
        color: "#555"
    },
    button: {
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        padding: "0.75rem 1.5rem",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer"
    }
};

export default DepositUnsuccess;
