/* eslint-disable no-unused-vars */
import { useState } from "react";
import Search from "./components/Search";
import EmojiList from "./components/EmojiList";

function App() {
  const emojis = [
    {
      name: "100",
      emoji: "💯"
    },
    {
      name: "1234",
      emoji: "🔢"
    },
    {
      name: "Sırıtma",
      emoji: "😃"
    },
    {
      name: "Ekşitme",
      emoji: "😬"
    },
    {
      name: "Sırıtış",
      emoji: "😁"
    },
    {
      name: "Neşeli",
      emoji: "😂"
    },
    {
      name: "Gülen Yüz",
      emoji: "😀"
    },
    {
      name: "Gülümsemek",
      emoji: "😄"
    },
    {
      name: "Tatlı Gülüş",
      emoji: "😅"
    },
    {
      name: "Kahkaha Atma",
      emoji: "😆"
    },
    {
      name: "Sevimli Melek",
      emoji: "😇"
    },
    {
      name: "Göz Kırpma",
      emoji: "😉"
    },
    {
      name: "Utanma",
      emoji: "😊"
    },
    {
      name: "Hafif Gülümseme",
      emoji: "🙂"
    },
    {
      name: "Baş Aşağı Gülümseme",
      emoji: "🙃"
    },
    {
      name: "Relax Gülümseme",
      emoji: "🙂"
    },
    {
      name: "Yum Yum Gülümseme",
      emoji: "😋"
    },
    {
      name: "Huzurlu Gülümseme",
      emoji: "😌"
    },
    {
      name: "Sevgi Dolu Gülümseme",
      emoji: "😍"
    },
    {
      name: "Öpücük",
      emoji: "😘"
    },
  ];
  const [searchedList, setSearchedList] = useState(emojis);
  const [copiedEmoji, setCopiedEmoji] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    const filteredList = emojis.filter((emoji) => {
      return (
        emoji.name.toLowerCase().includes(text.toLowerCase())
      );
    });
    setSearchedList(filteredList);
  }

  const handleClick = (emojiCharacter) => {
    navigator.clipboard.writeText(emojiCharacter)
      .then(() => {
        setCopiedEmoji(emojiCharacter);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    <h1 className="text-3xl text-center m-4">😸 Emoji Arama Motoru 😺</h1>
    <Search onChange = {handleChange}></Search>
    <div className="flex justify-center flex-wrap gap-4 p-2">
          {searchedList.map((emoji) => (
            <EmojiList
            key={emoji.name}
            emoji={emoji}
            onClick={() => handleClick(emoji.emoji)}
          />
          ))}
        </div>
    </>
  )
}
export default App
