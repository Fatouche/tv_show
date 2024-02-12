import { Search } from "react-bootstrap-icons";

type Props = {
  onSubmit: (searchValue: string) => void;
};

export const SearchBar = ({ onSubmit }: Props) => {
  const submit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      onSubmit(e.currentTarget.value);
    }
  };

  return (
    <>
      <Search size={27} className="searchbar_icon" />
      <input
        onKeyUp={submit}
        className="searchbar_input"
        type="text"
        placeholder="Cherche un série que tu pourrais apprécier"
      />
    </>
  );
};
