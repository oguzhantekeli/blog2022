import "comments.css";
const Comments = () => {
  return (
    <>
      <div className="comments">
        <div className="comments-title">
          <h2>Comments</h2>
          <div className="comment-item">
            <div className="comment-item-avatar">
              <img src="//" alt="commentauthoravatar" />
            </div>
            <div className="comment-item-text">
              <div className="comment-item-author-name">
                <h3>Author name</h3>
                <p>post date 12.11.2020</p>
              </div>
              <div className="comment-item-content">
                <p>
                  nt pretium. Nulla facilisi. Nulla at lobortis nisi. Quisque
                  sollicitudin feugiat fermentum. Quisque eget enim sodales,
                  mollis mi in, ornare ex. Mauris ligula libero, bibendum ac
                  gravida et, accumsan in velit. Vivamus velit mi, gravida
                  porttitor lorem ut, eleifend imperdiet est. Nulla sed ip
                </p>
              </div>
            </div>
          </div>
          <div className="comment-item">
            <div className="comment-item-avatar">
              <img src="//" alt="commentauthoravatar" />
            </div>
            <div className="comment-item-text">
              <div className="comment-item-author-name">
                <h3>Author name</h3>
                <p>post date 12.11.2020</p>
              </div>
              <div className="comment-item-content">
                <p>
                  nt pretium. Nulla facilisi. Nulla at lobortis nisi. Quisque
                  sollicitudin feugiat fermentum. Quisque eget enim sodales,
                  mollis mi in, ornare ex. Mauris ligula libero, bibendum ac
                  gravida et, accumsan in velit. Vivamus velit mi, gravida
                  porttitor lorem ut, eleifend imperdiet est. Nulla sed ip
                </p>
              </div>
            </div>
          </div>
          <div className="comment-item">
            <div className="comment-item-avatar">
              <img src="//" alt="commentauthoravatar" />
            </div>
            <div className="comment-item-text">
              <div className="comment-item-author-name">
                <h3>Author name</h3>
                <p>post date 12.11.2020</p>
              </div>
              <div className="comment-item-content">
                <p>
                  nt pretium. Nulla facilisi. Nulla at lobortis nisi. Quisque
                  sollicitudin feugiat fermentum. Quisque eget enim sodales,
                  mollis mi in, ornare ex. Mauris ligula libero, bibendum ac
                  gravida et, accumsan in velit. Vivamus velit mi, gravida
                  porttitor lorem ut, eleifend imperdiet est. Nulla sed ip
                </p>
              </div>
            </div>
          </div>
          <div className="comment-item">
            <div className="comment-item-avatar">
              <img src="//" alt="commentauthoravatar" />
            </div>
            <div className="comment-item-text">
              <div className="comment-item-author-name">
                <h3>Author name</h3>
                <p>post date 12.11.2020</p>
              </div>
              <div className="comment-item-content">
                <p>
                  nt pretium. Nulla facilisi. Nulla at lobortis nisi. Quisque
                  sollicitudin feugiat fermentum. Quisque eget enim sodales,
                  mollis mi in, ornare ex. Mauris ligula libero, bibendum ac
                  gravida et, accumsan in velit. Vivamus velit mi, gravida
                  porttitor lorem ut, eleifend imperdiet est. Nulla sed ip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-comment">
        <div className="post-comment-title">
          <h2>Leave a comment</h2>
        </div>
        <div className="post-comment-form">
          <form action="" method="post">
            <div className="form-group">
              <input type="text" placeholder="name" name="name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="email" name="email" />
            </div>
            <div className="form-group">
              <textarea
                rows="5"
                placeholder="message"
                name="message"
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
