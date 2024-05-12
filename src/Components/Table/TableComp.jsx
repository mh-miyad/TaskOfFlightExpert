import { Table } from "flowbite-react";

import useFlightStore from "../../Zustand/Store";

// import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TableComp = () => {
  // eslint-disable-next-line react/prop-types
  const { flights } = useFlightStore();
  const h = flights[0].itineraries;

  console.log(h);
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString(); // Adjust format if needed
  };

  return (
    <div className="mx-5">
      <div className=" w-full overflow-x-auto">
        <Table>
          <Table.Head className="">
            <Table.HeadCell colSpan={2}>FLIGHT</Table.HeadCell>
            <Table.HeadCell>AIRCRAFT</Table.HeadCell>
            <Table.HeadCell colSpan={2}>CLASS</Table.HeadCell>
            <Table.HeadCell colSpan={2}>FARE</Table.HeadCell>
            <Table.HeadCell colSpan={3}>ROUTE</Table.HeadCell>
            <Table.HeadCell>DURATION</Table.HeadCell>
            <Table.HeadCell>PRICE</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {flights.map((flight, index) => (
              <Table.Row key={index}>
                <Table.Cell>{flight.marketingCarrier}</Table.Cell>
                <Table.Cell>{flight.flightNumber}</Table.Cell>
                <Table.Cell>{flight.aircraft}</Table.Cell>
                <Table.Cell colSpan={2}>{flight.class?.join("")}</Table.Cell>
                {flight.fareBasis?.length > 0 ? (
                  <>
                    <Table.Cell colSpan={2}>{flight.fareBasis[0]}</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </>
                ) : (
                  <Table.Cell colSpan={2}>
                    {flight.fareBasis?.join(", ")}
                  </Table.Cell>
                )}
                <Table.Cell>
                  {flight.segments?.map((segment) => (
                    <span key={segment.departure.iataCode}>
                      {segment.departure.iataCode} - {segment.arrival.iataCode}
                    </span>
                  ))}
                </Table.Cell>
                <Table.Cell colSpan={2}>
                  {formatDateTime(flight.segments?.[0]?.departure?.at)}
                </Table.Cell>
                <Table.Cell>
                  {formatDateTime(
                    flight.segments?.[flight.segments?.length - 1]?.arrival?.at,
                  )}
                </Table.Cell>
                <Table.Cell>{flight.duration?.toString()}</Table.Cell>
                <Table.Cell>{flight.price?.toString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default TableComp;
