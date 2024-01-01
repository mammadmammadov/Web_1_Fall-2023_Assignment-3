import "../assets/ShareCards.css";
import Swal from "sweetalert2";
const ShareCards = ({ selectedFlashcards, flashcards }) => {
  const handleShare = () => {
    if (selectedFlashcards.length === 0) {
      Swal.fire("Please select at least one card 🫠");
      return;
    }
    const selectedCardDetails = selectedFlashcards
      .map((id) => flashcards.find((card) => card.id === id))
      .filter((card) => card);

    const emailBody = JSON.stringify(selectedCardDetails, null, 2);

    const mailtoUrl = `mailto:?subject=Flashcards&body=${encodeURIComponent(
      emailBody
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div>
      <button className="share" onClick={handleShare}>
        Share 📤
      </button>
    </div>
  );
};

export default ShareCards;
