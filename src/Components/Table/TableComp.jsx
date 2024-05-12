import { Table } from "flowbite-react";

import data from "../../Data/Demo.json";

const TableComp = () => {
  console.log(data.flightOffer.map((ele) => ele));

  return (
    <div className="mx-5">
      <h2 className="mb-5 text-lg">{data.message}</h2>
      <div className=" w-full overflow-x-auto">
        <Table className="text-nowrap">
          <Table.Head className=" text-center">
            <Table.HeadCell className="text-base">FLIGHT</Table.HeadCell>
            <Table.HeadCell className="text-base">AIRCRAFT</Table.HeadCell>
            <Table.HeadCell className="text-base">CLASS</Table.HeadCell>
            <Table.HeadCell className="text-base">FARE</Table.HeadCell>
            <Table.HeadCell className="text-base">ROUTE</Table.HeadCell>
            <Table.HeadCell className="text-base">Departure</Table.HeadCell>
            <Table.HeadCell className="text-base">arrivaL</Table.HeadCell>
            <Table.HeadCell className="text-base">DURATION</Table.HeadCell>
            <Table.HeadCell className="text-base">PRICE</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data?.flightOffer?.map((ele, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell className="px-4 text-center">
                    {ele.itineraries.map((e, i) => {
                      return (
                        <div key={i}>
                          {e.segments.map((ele, index) => {
                            return (
                              <p
                                key={index}
                                className="flex items-center gap-2 text-center"
                              >
                                <span>{ele.marketingCarrier}</span>
                                <span>{ele.flightNumber}</span>
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Table.Cell>
                  <Table.Cell className="px-4 text-center">
                    {ele.itineraries[0].segments[0].aircraft}
                  </Table.Cell>
                  <Table.Cell className="px-4 text-center">
                    {ele.class.map((e, i) => {
                      return (
                        <div key={i}>
                          {e.map((ele, index) => {
                            return <p key={index}>{ele}</p>;
                          })}
                        </div>
                      );
                    })}
                  </Table.Cell>
                  <Table.Cell className="px-4 text-center">
                    {ele.fareBasis.map((e, i) => {
                      return (
                        <div key={i}>
                          {e.map((ele, index) => {
                            return <p key={index}>{ele}</p>;
                          })}
                        </div>
                      );
                    })}
                  </Table.Cell>
                  <Table.Cell className="px-4 text-center">
                    {ele.itineraries.map((e, i) => {
                      return (
                        <div key={i}>
                          {e.segments.map((ele, index) => {
                            return (
                              <p key={index}>
                                {ele.departure.iataCode} -{" "}
                                {ele.arrival.iataCode}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Table.Cell>
                  <Table.Cell className="px-4 text-center">
                    {ele.itineraries.map((e, i) => {
                      return (
                        <div key={i}>
                          {e.segments.map((ele, index) => {
                            return <p key={index}>{ele.departure.at}</p>;
                          })}
                        </div>
                      );
                    })}
                  </Table.Cell>
                  <Table.Cell className="px-4 text-center">
                    {ele.itineraries.map((e, i) => {
                      return (
                        <div key={i}>
                          {e.segments.map((ele, index) => {
                            return <p key={index}>{ele.arrival.at}</p>;
                          })}
                        </div>
                      );
                    })}
                  </Table.Cell>
                  <Table.Cell className="px-4 text-center">
                    {ele.itineraries.map((e, i) => {
                      return <div key={i}>{e.duration}</div>;
                    })}
                  </Table.Cell>
                  <Table.Cell className="px-4 text-center">
                    <div className="space-y-2 text-center">
                      <p>{ele.price}</p>
                      <button className="rounded bg-[#2E3791] px-5 py-2 text-white">
                        Select
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default TableComp;
