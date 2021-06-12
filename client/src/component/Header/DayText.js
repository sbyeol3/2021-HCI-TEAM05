import styled from "styled-components";
import { MONTH } from "../../constants/date";

const convertMonth = (date) => {
  return (new Date(date).getMonth() + 1 + "").padStart(2, 0);
};

const convertDate = (date) => {
  return (new Date(date).getDate() + "").padStart(2, 0);
};

const getDateUnit = (date) => {
  if (date === 1) return "st";
  if (date === 2) return "nd";
  if (date === 3) return "rd";
  return "th";
};

const DayText = ({ fullDate }) => {
  const month = convertMonth(fullDate);
  const date = convertDate(fullDate);
  return (
    <Wrapper>
      <Month>{month}</Month>
      <MonthEng>{MONTH[+month]}</MonthEng>
      <DateNumber>{date}</DateNumber>
      <DateUnit>{getDateUnit(+date)}</DateUnit>
    </Wrapper>
  );
};

export default DayText;

const Wrapper = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Month = styled.span`
  font-size: 40px;
  font-weight: 800;
`;

const MonthEng = styled.span`
  margin: 0 15px;
`;

const DateNumber = styled(Month)``;

const DateUnit = styled.span``;
