import React from 'react';
import "./styles.scss"
import { useSelector } from 'react-redux';

function AccountSetting() {
    const theme = useSelector((state) => state.theme);
  return (
    <div className="accountSettingContainer" style={{backgroundColor:theme === "light" ? "#ffffff" : "#0B0B0C"}}>AccountSetting</div>
  )
}

export default AccountSetting