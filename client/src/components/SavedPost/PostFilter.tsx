import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Post from "../Post";
import { Article } from "./mockArticle";
import LayoutStyle from "./style";

type Props = {
  visualized: string;
  handleChange: any;
  tagList: string[];
  postList: Article[];
  visualizedList?: Article[];
};

export default function PostFilter({
  visualized,
  visualizedList,
  handleChange,
  tagList,
  postList,
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
          <Tab label="All" value="All" sx={LayoutStyle.tabLabel}/>
          {tagList.map((ele, i) => (
            <Tab
              sx={LayoutStyle.tabLabel}
              key={tagList[i]}
              label={tagList[i]}
              value={tagList[i]}
            />
          ))}
        </TabList>
        <TabPanel sx={LayoutStyle.tabPanel}value="All">
          <ul style={LayoutStyle.li}>
            {postList?.map((ele) => (
              <li key={ele.id}>
                <Post article={ele} />
              </li>
            ))}
          </ul>
        </TabPanel>
        {tagList.map((ele) => (
          <TabPanel value={ele} key={ele}>
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
