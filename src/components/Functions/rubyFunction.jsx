function RubyFunc({ version, showArray, action }) {
  const japaneseArray1 = [
    { kanji: "君", text: "kimi", furi: "きみ" },
    { kanji: "は", text: "wa", furi: "" },
  ];
  const japaneseArray2 = [
    { kanji: "二", text: "ni", furi: "に" },
    { kanji: "十", text: "jū", furi: "じゅう" },
    { kanji: "五", text: "go", furi: "ご" },
    { kanji: "歳", text: "sai", furi: "さい" },
  ];
  const japaneseArray3 = [{ kanji: "の", text: "no", furi: "" }];
  const japaneseArray4 = [
    { kanji: "誕", text: "tan", furi: "たん" },
    { kanji: "生", text: "jō", furi: "じょう" },
    { kanji: "日", text: "bi", furi: "び" },
  ];
  const japaneseArray5 = [{ kanji: "を", text: "wo", furi: "" }];
  const japaneseArray6 = [
    { kanji: "お", text: "o", furi: "" },
    { kanji: "め", text: "me", furi: "" },
    { kanji: "で", text: "de", furi: "" },
    { kanji: "とう", text: "tō", furi: "" },
  ];
  const japaneseArray7 = [
    { kanji: "ご", text: "go", furi: "" },
    { kanji: "ざ", text: "za", furi: "" },
    { kanji: "い", text: "i", furi: "" },
    { kanji: "ま", text: "ma", furi: "" },
    { kanji: "す", text: "su", furi: "" },
  ];

  return (
    <>
      {version === 0 && (
        <>
          <button onClick={() => action("text-1")}>
            {japaneseArray1.map((item) => (
              <ruby style={showArray["text-1"] ? { opacity: 1 } : { opacity: 0 }}>
                {item.kanji}
                <rp>(</rp>
                <rt>{item.text}</rt>
                <rp>)</rp>
              </ruby>
            ))}

            {showArray["text-1"] === 0 && <span className="empty">----</span>}
          </button>
          {/**/}
          <button onClick={() => action("text-2")}>
            {japaneseArray2.map((item) => (
              <ruby style={showArray["text-2"] ? { opacity: 1 } : { opacity: 0 }}>
                {item.kanji}
                <rp>(</rp>
                <rt>{item.text}</rt>
                <rp>)</rp>
              </ruby>
            ))}
            {showArray["text-2"] === 0 && <span className="empty">----</span>}
          </button>
          <span>
            {japaneseArray3.map((item) => (
              <ruby>
                {item.kanji}
                <rp>(</rp>
                <rt>{item.text}</rt>
                <rp>)</rp>
              </ruby>
            ))}
          </span>
          {/**/}
          <button onClick={() => action("text-3")}>
            {japaneseArray4.map((item) => (
              <ruby style={showArray["text-3"] ? { opacity: 1 } : { opacity: 0 }}>
                {item.kanji}
                <rp>(</rp>
                <rt>{item.text}</rt>
                <rp>)</rp>
              </ruby>
            ))}
            {showArray["text-3"] === 0 && <span className="empty">----</span>}
          </button>
          <span>
            {japaneseArray5.map((item) => (
              <ruby>
                {item.kanji}
                <rp>(</rp>
                <rt>{item.text}</rt>
                <rp>)</rp>
              </ruby>
            ))}
          </span>
          {/**/}
          <button onClick={() => action("text-4")}>
            {japaneseArray6.map((item) => (
              <ruby style={showArray["text-4"] ? { opacity: 1 } : { opacity: 0 }}>
                {item.kanji}
                <rp>(</rp>
                <rt>{item.text}</rt>
                <rp>)</rp>
              </ruby>
            ))}
            {showArray["text-4"] === 0 && <span className="empty">----</span>}
          </button>
          {/**/}
          <span>
            {japaneseArray7.map((item) => (
              <ruby>
                {item.kanji}
                <rp>(</rp>
                <rt>{item.text}</rt>
                <rp>)</rp>
              </ruby>
            ))}
          </span>
        </>
      )}

      {version === 1 && (
        <span>
          {japaneseArray1.map((item) => (
            <ruby>
              {item.kanji}
              <rp>(</rp>
              <rt>{item.furi}</rt>
              <rp>)</rp>
            </ruby>
          ))}
        </span>
      )}

      {version === 2 && (
        <span>
          {japaneseArray4.map((item) => (
            <ruby>
              {item.kanji}
              <rp>(</rp>
              <rt>{item.furi}</rt>
              <rp>)</rp>
            </ruby>
          ))}
        </span>
      )}

      {version === 3 && (
        <span>
          {japaneseArray2.map((item) => (
            <ruby>
              {item.kanji}
              <rp>(</rp>
              <rt>{item.furi}</rt>
              <rp>)</rp>
            </ruby>
          ))}
        </span>
      )}

      {version === 4 && (
        <span>
          {japaneseArray6.map((item) => (
            <ruby>
              {item.kanji}
              <rp>(</rp>
              <rt>{item.furi}</rt>
              <rp>)</rp>
            </ruby>
          ))}
        </span>
      )}
    </>
  );
}

export default RubyFunc;
