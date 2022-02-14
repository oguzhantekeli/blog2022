import "./comments.css";
const Comments = ({ commentsData }) => {
  return (
    <>
      <div className="comments">
        <div className="comments-title">
          <h2>Comments</h2>
        </div>
        {commentsData.map((item, idx) => {
          return (
            <div className="comment-item" key={idx}>
              <div className="comment-item-avatar">
                <img src="http://placehold.it/50x50" alt={item.author} />
              </div>
              <div className="comment-item-text">
                <div className="comment-item-author-name">
                  <h3>{item.author}</h3>
                  <p>{item.date}</p>
                </div>
                <div className="comment-item-content">
                  <p>{item.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="post-comment">
        <div className="post-comment-title">
          <h2>Leave a comment</h2>
        </div>
        <div className="post-comment-form">
          <form action="" method="post">
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                name="name"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="email"
                name="email"
                required="required"
              />
            </div>
            <div className="form-group">
              <textarea
                rows="5"
                placeholder="message"
                name="message"
                required="required"
              ></textarea>
            </div>
            <button className="btn btn-submit" type="submit" name="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Comments;
