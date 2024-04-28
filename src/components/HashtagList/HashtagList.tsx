import { useFeedbackItemsStore } from "../../stores/feedbackItemStore";
import HashtagItem from "./HashtagItem";


export default function HashtagList() {
    const companyList = useFeedbackItemsStore(state => state.getCompanyList())
    

    return (
        <ul className="hashtags">
            {companyList.map((company) => (
                <HashtagItem company={company} key={company} />
            ))}
        </ul>
    );
}
