import { useFeedbackItemsStore } from "../../stores/feedbackItemStore";

type HashTagListProps = {
    company: string;

};
export default function HashtagItem({ company }: HashTagListProps) {
    const selectCompany = useFeedbackItemsStore(state => state.selectCompany)
    return (
        <li key={company} >
            <button onClick={() => selectCompany(company)}>#{company}</button>
        </li>
    );
}
