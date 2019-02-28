import { ContentWraper, PageWrapper } from "./styles";
import { withRouter } from "react-router-dom";
import CalendarToday from "@material-ui/icons/CalendarToday";
import { GET_USER_PROFILE_QUERY } from "../../queries/GET_USER_PROFILE_QUERY";
import Home from "@material-ui/icons/Home";
import { Query } from "react-apollo";
import React from "react";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Timeline from "@material-ui/icons/Timeline";
import Schedule from "../Schedule/Schedule";

const User = ({ userId, history, location }) => {
  const locationArray = location.pathname.split("/");
  return (
    <PageWrapper>
      <Query query={GET_USER_PROFILE_QUERY} variables={{ id: userId }}>
        {({ loading, error, data: { userProfile } }) =>
          !loading && !error && userProfile ? (
            <SidebarMenu
              menuItems={[
                {
                  icon: <Home />,
                  text: "Home",
                  onClickFunction: () => history.push(`/user/${userProfile.id}`)
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
        {locationArray.length === 3 && <h1> Home</h1>}

        {locationArray.length === 4 ? (
          locationArray[3] === "schedule" ? (
            <Schedule />
          ) : (
            <h1> Timeline </h1>
          )
        ) : null}
      </ContentWraper>
    </PageWrapper>
  );
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
