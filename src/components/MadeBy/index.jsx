import UserCard from "./UserCard";

const MadeBy = () => {

  return (
    <div>
      <div name="PM" className="">
        <h3 className="text-3xl font-bold">PM</h3>
        {/* <UserCard userId={'kdc1'} /> */}
        <UserCard userId={1} idx={1} />
      </div>
      <div name="BackEnd" className="">
        <h3 className="text-3xl font-bold">BackEnd</h3>
        {/* <UserCard userId={'Songusika'} /> */}
        <UserCard userId={2} idx={2}/>
      </div>
      <div name="FrontEnd" className="">
        <h3 className="text-3xl font-bold">FrontEnd</h3>
        {/* <UserCard userId={'devdukh'} /> */}
        <UserCard userId={3} idx={3}/>
      </div>
      <div name="Android" className="">
        <h3 className="text-3xl font-bold">Android</h3>
        {/* <UserCard userId={'dahoonkk'} /> */}
        {/* <UserCard userId={'YangBH-0'} /> */}
        <UserCard userId={4} idx={4}/>
        <UserCard userId={5} idx={5}/>
      </div>
    </div>
  );
};

export default MadeBy;
