import IteamList from "./IteamList";

const Content = ({ item, HandelCheck, HandelDelete }) => {
  return (
    <main>
      {item.length ? (
        <IteamList
          item={item}
          HandelCheck={HandelCheck}
          HandelDelete={HandelDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>your list is empty</p>
      )}
    </main>
  );
};

export default Content;
