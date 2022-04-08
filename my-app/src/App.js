// import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/profile";
import PropTypes from "prop-types";

function App() {
  const handleName = (fullName) => alert(fullName);
  return (
    <div className="App">
      <Profile
        handleName={handleName}
        fullName="Chimamanda Ngozi Adichie"
        profession="Writer"
        bio="Born 15 September 1977, Chimamanda Ngozi Adichie is a Nigerian writer whose works include novels, short stories and nonfiction. She was described in The Times Literary Supplement as the most prominent of a procession of critically acclaimed young anglophone authors which is succeeding in attracting a new generation of readers to African literature, particularly in her second home, the United States.
Adichie, a feminist, has written the novels Purple Hibiscus (2003), Half of a Yellow Sun (2006), and Americanah (2013), the short story collection The Thing around Your Neck (2009), and the book-length essay We Should All Be Feminists (2014). Her most recent books are Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions (2017), Zikora (2020) and Notes on Grief (2021). In 2008, she was awarded a MacArthur Genius Grant.
"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2_8eSvP5g9AfVfDOF8VVwAeEc4ybU8jNjw&usqp=CAU"
          alt="Chimamanda Adichie"
        />
      </Profile>
    </div>
  );
}

Profile.PropTypes = {
  handleName: PropTypes.func,
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};

export default App;
