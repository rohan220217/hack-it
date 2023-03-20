import styles from "./ComplainCard.module.scss";
import { ReactComponent as MoreIcon } from "../../assets/svg/more.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/svg/arrowUp.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/svg/arrowDown.svg";
import { ReactComponent as CommentIcon } from "../../assets/svg/Comment.svg";
import dayjs from "dayjs";
import { voteSingleComplain } from "../../store/Actions/postAction";
import { useDispatch } from "react-redux";

var relativeTime = require("dayjs/plugin/relativeTime");

function ComplainCard({
  post_group_id,
  caption,
  createdAt,
  tags,
  postStatus,
  image,
  isComment = false,
  upvotes,
  downvotes,
  index
}) {
  const dispatch = useDispatch()
  const updatedDate = () => {
    console.log(createdAt);
    dayjs.extend(relativeTime);
    let formatedDay = dayjs(createdAt).format("YYYY-MM-DD");
    return dayjs(formatedDay).fromNow(true) + " ago";
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.tile}>
          <img
            src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
            alt="avatar"
          />
          <div className={styles.namePlace}>
            <h1>Rohan Kumar</h1>
            <h2>Tapti Hostel</h2>
          </div>
        </div>
        <MoreIcon />
      </div>
      <img
        src={`http://172.99.249.65:3200/${image}`}
        alt="image"
        className={styles.contentImage}
      />

      <div className={styles.cardbody}>
        {isComment ? <h4>{caption}</h4> : <h3>{caption}</h3>}
        <h3>
          <b>{tags?.map((tag) => "#" + tag + " ")}</b>
        </h3>
        <p>{updatedDate()}</p>
      </div>
      <div className={styles.cardfooter}>
        <div className={styles.cardfooterGroup}>
          <ArrowUpIcon onClick={() => dispatch(voteSingleComplain({id : post_group_id, value : {type: "U", rowIndex : index}}))} />
          <h3>{upvotes}</h3>
        </div>
        <div className={styles.cardfooterGroup}>
          <ArrowDownIcon onClick={() => dispatch(voteSingleComplain({id : post_group_id, value : {type: "D", rowIndex : index}}))} />
          <h3>{downvotes}</h3>
        </div>
        <div className={styles.cardfooterGroup}>
          <CommentIcon />
          <h3>5 Comments</h3>
        </div>

        <div className={styles.cardFooterStatus + " " + styles[postStatus]}>
          <h3>{postStatus}</h3>
        </div>
      </div>
    </div>
  );
}

export default ComplainCard;
