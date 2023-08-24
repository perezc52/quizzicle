import React from 'react'

const Options = (props) => {

    const handleCategoryChange = (event) => {
        props.setCategory(event.target.value);
      };
    
      const handleDifficultyChange = (event) => {
        props.setDifficulty(event.target.value);
      };

    function handleSubmit(e) {
        e.preventDefault()
        props.reset()
        props.getQuizQuestions(props.category, props.difficulty)
    }  

    return (
        <form onSubmit={handleSubmit}>
      <label>
        Select Category:
        <select value={props.category} onChange={handleCategoryChange}>
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Books</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="13">Musicals & Theatre</option>
          <option value="14">Television</option>
          <option value="15">Video Games</option>
          <option value="16">Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Computers</option>
          <option value="19">Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Comics</option>
          <option value="30">Gadgets</option>
          <option value="31">Anime & Manga</option>
          <option value="32">Cartoons & Animations</option>
        </select>
      </label>
      <label>
        Select Difficulty:
        <select value={props.difficulty} onChange={handleDifficultyChange}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <br />
      <button type="submit">Apply</button>
    </form>
    )
}

export default Options