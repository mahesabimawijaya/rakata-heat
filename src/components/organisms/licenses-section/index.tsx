import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import { Reveal } from "@/components/templates/Reveal";
import { licenses } from "@/data/data";
import React from "react";

const LicenseSection = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex direction="col" directionMd="col" align="start">
          <Flex direction="col" directionMd="col" align="start" gap="gap-3">
            <Reveal>
              <SectionTitle>Licenses</SectionTitle>
            </Reveal>
            <Reveal>
              <p className="capitalize font-medium">Kepercayaan Melalui Legalitas</p>
            </Reveal>
          </Flex>
        </Flex>
        <Reveal>
          <div className="mx-auto max-w-screen-xl px-4 lg:px-12 mt-10">
            <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-white uppercase bg-brand-700">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        No.
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Nama
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Deskripsi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {licenses.map((license, i) => (
                      <tr className="border-b" key={i}>
                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                          {license.no}
                        </th>
                        <td className="px-4 py-3">{license.name}</td>
                        <td className="px-4 py-3">{license.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default LicenseSection;
