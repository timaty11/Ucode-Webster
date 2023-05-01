import React from 'react';

import UserEditForm from '../src/components/common/edit/UserEditForm.jsx';
import RoleEditForm from '../src/components/common/edit/RoleEditForm.jsx';
import EventEditForm from '../src/components/common/edit/EventEditForm.jsx';
import CategoryEditForm from '../src/components/common/edit/CategoryEditForm.jsx';
import TicketEditForm from '../src/components/common/edit/TicketEditForm.jsx';
import OrganizationEditForm from '../src/components/common/edit/OrganizationEditForm.jsx';
import CouponEditForm from '../src/components/common/edit/CouponEditForm.jsx';


const editForms = (data) => {
  
  return ({
    users: <UserEditForm originData={data} formMessage={"Edit user"} />,
    roles: <RoleEditForm originData={data} formMessage={"Edit role"} />,
    events: <EventEditForm originData={data} formMessage={data ? "Edit event" : "Create event"} />,
    categories: <CategoryEditForm originData={data} formMessage={"Edit category"} />,
    tickets: <TicketEditForm originData={data} formMessage={"Edit ticket"} />,
    organization: <OrganizationEditForm originData={data} formMessage={"Edit organization"} />,
    coupons: <CouponEditForm originData={data} formMessage={"Edit coupon"} />
  });
}

export default editForms;
