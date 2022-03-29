import "../gif-component/Gif.css";

const Gif = (props) => {
  return (
    <div className="content-wrapper">
      <p>{props.title}</p>
      <img src={props.url} alt={props.alt}/>
    </div>
  );
};

export default Gif;
