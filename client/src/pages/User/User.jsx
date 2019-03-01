import React, { lazy, Suspense } from "react";
import { ContentWraper, PageWrapper } from "./styles";
import { withRouter, Route, Switch } from "react-router-dom";
import CalendarToday from "@material-ui/icons/CalendarToday";
import { GET_USER_PROFILE_QUERY } from "../../queries/GET_USER_PROFILE_QUERY";
import Home from "@material-ui/icons/Home";
import { Query } from "react-apollo";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Timeline from "@material-ui/icons/Timeline";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

/**
 * Lazily each item to be displayed
 * in the content tab
 */
const Schedule = lazy(() => import("../Schedule/Schedule"));

const User = ({ userId, history, match }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>KGSM Tracker - Dashboard</title>
      </Helmet>

      <PageWrapper>
        <Query query={GET_USER_PROFILE_QUERY} variables={{ id: userId }}>
          {({ loading, error, data: { userProfile } }) =>
            !loading && !error && userProfile ? (
              <SidebarMenu
                menuItems={[
                  {
                    icon: <Home />,
                    text: "Home",
                    onClickFunction: () =>
                      history.push(`/user/${userProfile.id}`)
                  },
                  {
                    icon: <CalendarToday />,
                    text: "Schedule",
                    onClickFunction: () =>
                      history.push(`/user/${userProfile.id}/schedule`)
                  },
                  {
                    icon: <Timeline />,
                    text: "Timeline",
                    onClickFunction: () =>
                      history.push(`/user/${userProfile.id}/timeline`)
                  }
                ]}
              />
            ) : null
          }
        </Query>

        <ContentWraper>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                path={`${match.path}`}
                render={() => <h1> Home </h1>}
                exact
              />
              <Route
                path={`${match.path}/schedule`}
                render={() => <Schedule />}
              />
              <Route
                path={`${match.path}/timeline`}
                render={() => <h1> Timeline</h1>}
              />
            </Switch>
          </Suspense>
        </ContentWraper>
      </PageWrapper>
    </>
  );
};

User.PropTypes = {
  userId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
export default withRouter(User);

//             <SidebarMenuItem
//               icon={<Home />}
//               text="Home"
//               onClickFunction={() => alert("Clicked")}
//             />
//             <SidebarMenuItem
//               icon={<CalendarToday />}
//               text="Schedule"
//               onClickFunction={() => alert("Clicked")}
//             />
//             <SidebarMenuItem
//               icon={<Timeline />}
//               text="Statistics"
//               onClickFunction={() => alert("Clicked")}
//             />
//           </SidebarWrapper>
//         ) : null
//       }
//     </Query>

//     <ContentWraper>
//       <CardsWrapper>
//         {/* Two Big Cards */}
//         <BigCardWrapper>
//           <Card>Big Card</Card>
//         </BigCardWrapper>
//         <BigCardWrapper>
//           <Card>Big Card</Card>
//         </BigCardWrapper>

//         {/* Three Small Cards */}
//         <SmallCardWrapper>
//           <Card>Small Card</Card>
//         </SmallCardWrapper>
//         <SmallCardWrapper>
//           <Card>Small Card</Card>
//         </SmallCardWrapper>
//         <SmallCardWrapper>
//           <Card>Small Card</Card>
//         </SmallCardWrapper>
//       </CardsWrapper>
//     </ContentWraper>
//   </PageWrapper>
// );

// <CardsWrapper>
//   {/* Two Big Cards */}
//   <BigCardWrapper>
//     <Card>Big Card</Card>
//   </BigCardWrapper>
//   <BigCardWrapper>
//     <Card>Big Card</Card>
//   </BigCardWrapper>

//   {/* Three Small Cards */}
//   <SmallCardWrapper>
//     <Card>Small Card</Card>
//   </SmallCardWrapper>
//   <SmallCardWrapper>
//     <Card>Small Card</Card>
//   </SmallCardWrapper>
//   <SmallCardWrapper>
//     <Card>Small Card</Card>
//   </SmallCardWrapper>
// </CardsWrapper>
