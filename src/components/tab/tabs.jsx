import React, {  useState } from "react";
import Tab from "./tab";
import styles from "./Tabs.module.css";
function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="w_CS" style={{ minWidth: "fit-content" }}>
      <div style={{ background: "#071125" }} className={styles.tabs}>
        {props.children.map((child) => {
          const { label, Icon } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
              Icon={Icon}
            />
          );
        })}
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        {props.children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

export default Tabs;
