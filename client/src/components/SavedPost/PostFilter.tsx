import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddTag from "../NewsFeed/AddTopic";
import Post from "../Post";
import { Article } from "./mockArticle";
import LayoutStyle from "./style";

type Props = {
  visualized: string,
  handleChange: any,
  topicList: string[],
  postList: Article[],
  visualizedList?: Article[],
  add?: boolean,
};

export default function PostFilter({
  visualized,
  visualizedList,
  handleChange,
  topicList,
  postList,
  add
}: Props) {

  return (
    <Box sx={LayoutStyle.box}>
      <TabContext value={visualized}>
        <TabList
          value={visualized}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
          textColor="primary"
          sx={LayoutStyle.tabList}
        >
         {add && <AddTag />}
          <Tab label="All" value="All" sx={LayoutStyle.tabLabel}/>
          {topicList.map((ele, i) => (
            <Tab
              sx={LayoutStyle.tabLabel}
              key={topicList[i]}
              label={topicList[i]}
              value={topicList[i]}
            />
          ))}
        </TabList>
        <TabPanel sx={LayoutStyle.tabPanel} value="All">
          <ul style={LayoutStyle.li}>
            {postList?.map((ele) => (
              <li key={ele.id}>
                <Post article={ele} />
              </li>
            ))}
          </ul>
        </TabPanel>
        {topicList.map((ele) => (
          <TabPanel sx={LayoutStyle.tabPanel} value={ele} key={ele}>
            <ul style={LayoutStyle.li}>
              {visualizedList?.map((ele) => (
                <li key={ele.id}>
                  <Post article={ele} />
                </li>
              ))}
            </ul>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
