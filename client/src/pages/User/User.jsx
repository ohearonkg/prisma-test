import {
  BigCardWrapper,
  CardsWrapper,
  ContentWraper,
  PageWrapper,
  SmallCardWrapper
} from "./styles";

import CalendarToday from "@material-ui/icons/CalendarToday";
import Card from "../../components/Card/Card";
import { GET_USER_PROFILE_QUERY } from "../../queries/GET_USER_PROFILE_QUERY";
import Home from "@material-ui/icons/Home";
import { Query } from "react-apollo";
import React from "react";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Timeline from "@material-ui/icons/Timeline";

const User = ({ userId }) => (
  <PageWrapper>
    <Query query={GET_USER_PROFILE_QUERY} variables={{ id: userId }}>
      {({ loading, error, data: { userProfile } }) =>
        !loading && !error && userProfile ? (
          <SidebarMenu
            menuItems={[
              {
                icon: <Home />,
                text: "Home",
                onClickFunction: () => alert("Clicked")
              },
              {
                icon: <CalendarToday />,
                text: "Schedule",
                onClickFunction: () => alert("Clicked")
              },
              {
                icon: <Timeline />,
                text: "Timeline",
                onClickFunction: () => alert("Clicked")
              }
            ]}
          />
        ) : null
      }
    </Query>

    <ContentWraper>
      <CardsWrapper>
        {/* Two Big Cards */}
        <BigCardWrapper>
          <Card>Big Card</Card>
        </BigCardWrapper>
        <BigCardWrapper>
          <Card>Big Card</Card>
        </BigCardWrapper>

        {/* Three Small Cards */}
        <SmallCardWrapper>
          <Card>Small Card</Card>
        </SmallCardWrapper>
        <SmallCardWrapper>
          <Card>Small Card</Card>
        </SmallCardWrapper>
        <SmallCardWrapper>
          <Card>Small Card</Card>
        </SmallCardWrapper>
      </CardsWrapper>
    </ContentWraper>
  </PageWrapper>
);

export default User;

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
