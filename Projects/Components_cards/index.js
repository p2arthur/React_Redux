import React from "react";
import reactDom from "react-dom";
import HotReload from "./appconfig";
import faker from "faker";

import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
HotReload();

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to continue?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          date="Yesterday at 5:00PM"
          content="Can you send a link to your website?"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Justin"
          date="06 of July at 9:00 AM"
          content="What about bitcoin?"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Maryah"
          date="Yesterday at 5:00PM"
          content="Do you trust in ethereum technology?"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Arthur"
          date="Yesterday at 5:00PM"
          content="Nice post my friend"
        />
      </ApprovalCard>

      <ApprovalCard>
        {" "}
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jason"
          date="Yesterday at 5:00PM"
          content="Im close to it"
        />
      </ApprovalCard>
    </div>
  );
};

reactDom.render(<App />, document.querySelector("#root"));
