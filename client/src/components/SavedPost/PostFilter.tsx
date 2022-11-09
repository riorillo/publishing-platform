import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import AddTopic from "../NewsFeed/AddTopic";
import Post from "../Post";
import { Article } from "./mockArticle";
import LayoutStyle from "./style";

type Props = {
  visualized: string;
  handleChange: any;
  topicList: string[];
  removePostFromList?(articleId: any): void | undefined;
  visualizedList?: Article[];
  add?: boolean;
  addTopicList?: string[];
  checkIfSaved?(articleId:string): boolean,
};

export default function PostFilter({
  visualized,
  visualizedList,
  handleChange,
  topicList,
  removePostFromList,
  checkIfSaved,
  add,
  addTopicList,
}: Props) {
  return (
    <Box sx={LayoutStyle.box}>
      {topicList.length >=1 && (
        <TabContext value={visualized}>
          <TabList
            value={visualized}
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
            textColor="primary"
            sx={LayoutStyle.tabList}
          >
            {add && (
              <AddTopic elementList={addTopicList} titleText="Add some topic" />
            )}
            <Tab label="All" value="All" sx={LayoutStyle.tabLabel} />
            {topicList.map((ele) => (
              <Tab
                sx={LayoutStyle.tabLabel}
                key={ele}
                label={ele}
                value={ele}
              />
            ))}
          </TabList>
          <TabPanel sx={LayoutStyle.tabPanel} value="All">
            <ul style={LayoutStyle.li}>
              {visualizedList?.map((ele) => (
                <li key={ele.id}>
                  <Post checkIfSaved={checkIfSaved} removePostFromList={removePostFromList} article={ele} />
                </li>
              ))}
            </ul>
          </TabPanel>
          {topicList.map((ele) => (
            <TabPanel sx={LayoutStyle.tabPanel} value={ele} key={ele}>
              <ul style={LayoutStyle.li}>
                {visualizedList?.map((ele) => (
                  <li key={ele.id}>
                    <Post checkIfSaved={checkIfSaved}
                      removePostFromList={removePostFromList}
                      article={ele}
                    />
                  </li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabContext>
      )}
    </Box>
  );
}
