import React from "react";

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <li className="grid grid-cols-[50%_10%_auto]">
    <strong className="col-span-1">{label}</strong>
    <span className="w-[15%] text-center">:</span>
    <span className="col-span-1">{value}</span>
  </li>
);

export default InfoItem;
