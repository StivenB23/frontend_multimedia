import { useNavigate } from 'react-router-dom';
import './PromotionalBanner.css';

const PromotionalBanner = ({ text, background = "backgroundBlue", link="" }) => {
	const navegate = useNavigate()
	const redirectTo = (url) => {
		navegate(url)
	}
	return (
		<div onClick={()=>redirectTo(link)} className={background === "backgroundBlue" ? "backgroundBlue" : "backgroundPink"}>
			<p>{text}</p>
		</div>
	);
};

export default PromotionalBanner;