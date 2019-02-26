import { ContentWraper, PageWrapper, SidebarWrapper } from "./styles";

import CalendarToday from "@material-ui/icons/CalendarToday";
import { GET_PROGRAMS_QUERY } from "../../queries/GET_PROGRAMS_QUERY";
import { GET_USER_PROFILE_QUERY } from "../../queries/GET_USER_PROFILE_QUERY";
import Home from "@material-ui/icons/Home";
import { Query } from "react-apollo";
import React from "react";
import SidebarMenuItem from "../../components/SidebarMenuItem/SidebarMenuItem";
import Timeline from "@material-ui/icons/Timeline";

const User = ({ userId }) => (
  <PageWrapper>
    <SidebarWrapper>
      <SidebarMenuItem
        icon={<Home />}
        text="Home"
        onClickFunction={() => alert("Clicked")}
      />
      <SidebarMenuItem
        icon={<CalendarToday />}
        text="Schedule"
        onClickFunction={() => alert("Clicked")}
      />
      <SidebarMenuItem
        icon={<Timeline />}
        text="Statistics"
        onClickFunction={() => alert("Clicked")}
      />
    </SidebarWrapper>

    <ContentWraper>
      <Query query={GET_USER_PROFILE_QUERY} variables={{ id: userId }}>
        {({ loading, error, data: { userProfile } }) => {
          if (error) {
            return <h2>Error</h2>;
          }
          if (loading) {
            return <h2>Loading</h2>;
          }
          if (!loading && !error && userProfile) {
            return (
              <div>
                Welcome Back {userProfile.firstname} {userProfile.lastname}
              </div>
            );
          }
        }}
      </Query>

      {/* User's Programs */}
      <Query query={GET_PROGRAMS_QUERY} variables={{ userID: userId }}>
        {({ loading, error, data: { programs } }) => {
          if (error) {
            return <h2>Error</h2>;
          }
          if (loading) {
            return <h2>Loading</h2>;
          }
          return (
            <>
              <h2>Your Programs</h2>
              {programs.length > 0 &&
                programs.map(program => <span> Program</span>)}
              {programs.length === 0 && (
                <div>You have no programs. Add One</div>
              )}
            </>
          );
        }}
      </Query>
    </ContentWraper>
  </PageWrapper>
);

export default User;
