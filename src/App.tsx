import { useEffect, useMemo, useState } from "react";
import Footer from "./Footer";
import HashtagList from "./components/HashtagList/HashtagList";
import Container from "./components/Container/Container";
import { TFeedbackItem } from "./lib/types";
import { useFeedbackItemsStore } from "./stores/feedbackItemStore";

function App() {

    const fetchFeedbackItems = useFeedbackItemsStore(state => state.fetchFeedbackItems)

    useEffect(() => {
        fetchFeedbackItems();
    }, [fetchFeedbackItems]);

    return (
        <div className="app">
            <Footer />
            <Container
            />
            <HashtagList 
            />
        </div>
    );
}

export default App;
