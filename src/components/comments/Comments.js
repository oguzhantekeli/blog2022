import "./comments.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getComments, addComment } from "../../features/comment/commentSlice";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const Comments = ({ blogData }) => {
  const { user } = useSelector((state) => state.auth);
  const { comments, comment } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(blogData.blogId));
  }, [dispatch, blogData.blogId, comments.length, comment]);

  return (
    <>
      <div className="comments">
        <div className="comments-title">
          <h2>Comments</h2>
        </div>
        {!comments.length ? <div>No Comments Here :(</div> : null}
        {comments.map((item) => {
          return (
            <div className="comment-item" key={item._id}>
              <div className="comment-item-avatar">
                <img
                  src={require(`../../images/svg/${item.commentOwnerAvatar}.svg`)}
                  alt={item.commentOwnerName}
                />
              </div>
              <div className="comment-item-text">
                <div className="comment-item-author-name">
                  <h3>{item.commentOwnerName}</h3>
                  <p>{new Date(item.updatedAt).toLocaleDateString()}</p>
                </div>
                <div className="comment-item-content">
                  <p>{item.commentText}</p>
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
        {!user ? (
          <div>
            <a href="/login">Login </a>to write comments.{" "}
          </div>
        ) : (
          <CommentForm blogData={blogData} />
        )}
      </div>
    </>
  );
};
const CommentForm = ({ blogData }) => {
  const [textComment, setTextComment] = useState("");
  const {
    comment,
    comments,
    isErrorComments,
    isLoadingComment,
    isSuccessComment,
    messageComments,
  } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isErrorComments) {
      toast.error(messageComments);
    }
    if (isSuccessComment) {
      toast.success("Comment Posted Successfully...");
      setTextComment("");
    }
  }, [messageComments, isErrorComments, isSuccessComment]);

  const onSubmit = (e) => {
    e.preventDefault();
    const commentPayload = {
      blogId: blogData.blogId,
      commentOwnerId: blogData.commentOwnerId,
      commentOwnerName: blogData.commentOwnerName,
      commentText: textComment,
      token: blogData.token,
    };
    dispatch(addComment(commentPayload));
  };
  if (isLoadingComment) {
    return (
      <div className="spinna">
        <Oval color="#00BFFF" height={50} width={50} />
      </div>
    );
  }
  return (
    <>
      <div className="post-comment-form">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="comment"></label>
            <textarea
              id="comment-text"
              rows="5"
              placeholder="Your Comment.."
              name="comment"
              value={textComment}
              required="required"
              onChange={(e) => setTextComment(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-submit" type="submit" name="submit">
            Submit Comment
          </button>
        </form>
      </div>
    </>
  );
};
export default Comments;
