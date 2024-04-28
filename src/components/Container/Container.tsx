import Header from "./Header/Header";
import FeedbackList from "./Feedback/FeedbackList";

export default function Container() {
    return (
        <main className="container">
            <Header />
            <FeedbackList />
        </main>
    );
}
