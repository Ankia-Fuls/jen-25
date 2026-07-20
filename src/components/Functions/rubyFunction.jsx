function RubyFunc(group) {
  // Works?? Seems to run 2 times each call??
  return (
    <ruby>
      {group["kanji"]}
      <rp>(</rp>
      <rt>{group["text"]}</rt>
      <rp>)</rp>
    </ruby>
  );
}

export default RubyFunc;
