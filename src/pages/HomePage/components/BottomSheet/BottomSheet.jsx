import styles from "./BottomSheet.module.scss";
import { ReactComponent as ShareIcon } from "../../../../assets/svg/share.svg";
import { ReactComponent as LinkIcon } from "../../../../assets/svg/link.svg";
import { ReactComponent as BookmarkIcon } from "../../../../assets/svg/bookmark.svg";
import { ReactComponent as ReportIcon } from "../../../../assets/svg/report.svg";
import { ReactComponent as EditIcon } from "../../../../assets/svg/edit.svg";
import { useSelector } from "react-redux";
import UserConstants from "../../../../constants/UserConstants";
import { Link } from "react-router-dom";

function BottomSheetItems({ currentGroupPostId }) {
  const { userType } = useSelector((state) => state.profileReducer);
  return (
    //   <p>{currentGroupPostId}</p>

    <div className={styles.icons}>
      {userType === UserConstants.USER_TYPE_OFFICER && (
        <Link to={`/update-complain/${currentGroupPostId}`}>
          <div className={styles.iconWithText}>
            <div>
              <EditIcon />{" "}
            </div>
            <h3>Edit</h3>
          </div>
        </Link>
      )}
      <div className={styles.iconWithText}>
        <div>
          <BookmarkIcon />{" "}
        </div>
        <h3>Save</h3>
      </div>
      <div className={styles.iconWithText}>
        <div>
          <ShareIcon />{" "}
        </div>
        <h3>Share</h3>
      </div>
      <div className={styles.iconWithText}>
        <div>
          <LinkIcon />{" "}
        </div>
        <h3>Link</h3>
      </div>
      <div className={styles.iconWithText + " " + styles.danger}>
        <div>
          <ReportIcon />{" "}
        </div>
        <h3>Report</h3>
      </div>
    </div>
  );
}

export default BottomSheetItems;
