import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projects</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">React-Js</h1>
          <h3 className="position">Front-end design</h3>
          <h4 className="about">
            Front-end design using react-js and styled components using react-scrolls.
          </h4>
          <a href="https://test-project-7af45.web.app/" className="contact-member">
            <span>Link</span>
          </a>
        </div>
      </div>


      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">To-do app</h1>
          <h3 className="position">Place to store your to-do's</h3>
          <h4 className="about">
            To do application made using HTML, CSS, and Javascripts.
          </h4>
          <a href="https://to-do-5c5dc.web.app/" className="contact-member">
            <span>Link</span>
          </a>
        </div>
      </div>
  
    </div>
  );
};

export default Members;
