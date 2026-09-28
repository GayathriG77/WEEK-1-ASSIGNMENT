function Filter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="All">All Categories</option>
      <option value="React">React</option>
      <option value="JavaScript">JavaScript</option>
      <option value="CSS">CSS</option>
      <option value="Node.js">Node.js</option>
    </select>
  );
}

export default Filter;