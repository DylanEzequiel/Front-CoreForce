interface IMembershipStyle{
    name:string,
    styles:string,
    description:string
}

export const MembershipsStyles:IMembershipStyle[]=[{
    name:"Free",
    styles:"hover:outline hover:outline-gray-800 shadow-black shadow-md",
    description:"Limited access"
  },{
    name:"Bronce",
    styles:"bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500 hover:outline hover:outline-amber-900  hover:shadow-lg hover:shadow-amber-500",
    description:"Access to basic features. Limited customer support. No access to premium content"
  },{
    name:"5e44acdb-5e94-4f8f-8374-ff1b5e9fdb25",
    styles:"bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:outline hover:outline-yellow-500  hover:shadow-xl hover:shadow-yellow-200",
    description:"Enjoy premium benefits. Priority customer support. Access to exclusive premium content"
  },{
    name:"a3b74948-ae9b-4a4a-beb5-4044c554d26f",
    styles:"bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 hover:outline-gray-300 hover:outline  hover:shadow-xl hover:shadow-white",
    description:"Get exclusive privileges. Dedicated customer support. Access to all premium content. Priority access to new features"
  }]