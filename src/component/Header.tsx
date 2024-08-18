import React from "react";
import { useSelector } from "react-redux";

interface ActionIconProps {
  src: string;
  alt: string;
}

const ActionIcon: React.FC<ActionIconProps> = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className="action-icon" />
);

interface UserProfileProps {
  name: string;
  company: string;
  imageSrc: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, company, imageSrc }) => (
  <div className="user-profile">
    <div className="profile-container">
      <img src={imageSrc} alt={`${name}'s profile`} className="profile-image" style={{borderRadius: "50%"}}/>
      <div className="profile-info">
        <div style={{ fontWeight: 600, fontSize: "12px", lineHeight: "16px" }}>{name}</div>
        <div style={{ fontWeight: 450, fontSize: "12px", lineHeight: "16px" }}>{company}</div>
      </div>
    </div>
  </div>
);

const Header: React.FC = () => {
  const profileDetail = useSelector(
    (state: any) => state.profile.profileDetail
  );
  return (
    <header className="header">
      <div className="search-container">
        <div className="search-input">
          <img loading="lazy" src="/24search.svg" alt="" className="search-icon" />
          <label htmlFor="search-pipedrive" className="visually-hidden">Search Pipedrive</label>
          <input type="text" id="search-pipedrive" className="search-text" placeholder="Search" />
        </div>
      </div>
      <img loading="lazy" src="/rcrmlogowatermark.svg" alt="recruit profile logo" className="logo" />
      <nav className="user-actions">
        <img loading="lazy" src="/add.svg" alt="add icon" className="add-user-icon" />
        <div className="divider" />
        <ActionIcon src="/gift.svg" alt="Action 1" />
        <ActionIcon src="/top-bar-mail.svg" alt="Action 2" />
        <ActionIcon src="/bell.svg" alt="Action 3" />
        <UserProfile
          name={profileDetail.lastUpdatedBy}
          company="MyCompany org"
          imageSrc="/avatar.jpg"
        />
      </nav>
    </header>
  );
};

export default Header;