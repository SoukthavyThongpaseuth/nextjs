"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFileCode } from "react-icons/fa";

// Third Party (Axios ເປັຍ Library ໃນການຮ້ອງຂໍຂໍ້ມູນໄປຍັງ Server)
import axios from "axios";

// ດຶງຂໍ້ມູນໄຟລ ຈາກ Server ຜ່ານ API ໂດຍໃຊ້ Axios
function AboutPage() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // ໃຊ້ Use Effect ສ້າງຟັງຊັ່ນໃນການດຶງຂໍ້ມູນເຂົ້າມາ
  useEffect(() => {
    console.log("Show Files");

    // ເປັນຟັງຊັ່ນ async ທີ່ຖືກສ້າງຂຶ້ນມາເພື່ອດຶງຂໍ້ມູນຈາກ API ("/api/file")
    const fetchData = async () => {
      try {
        setIsLoading(true); //ກຳນົດisLoading ເປັນ true ເພື່ອບອກວ່າເປັນການດຶງຂໍ້ມູນ
        const response = await axios.get("/api/files"); //ເອີ້ນໃຊ້ API ໂດຍໃຊ້ axios.get ແລະ ເກັບຜົນລັບໃນຕົວແປ Response

        console.log(response, "Files"); // ສະແດງຄ່າ

        setFiles(response.data.files);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white mx-auto p-5 text-black">
      <h1 className="p-5 flex justify-center text-center text-3xl italic font-extrabold hover:underline">
        Example Pictures Of My Project
      </h1>
      {/* 
      <input type="text" className="text-black" /> */}

      {/* ສ່ວນຂອງການສະແດງຖ້າ Data ກຳລັງໂຫຼດຢູ່ກໍສະແດງ Data Loading */}
      {isLoading ? (
        <p className="flex justify-center text-2xl text-green-600 font-extrabold">
          Data Loading...
        </p>
      ) : files?.length > 0 ? (
        <section>
          <div className=" py-5 gap-5 flex justify-center flex-wrap">
            {files.map((file, index) =>
              file?.mimeType?.startsWith("image/") ? (
                <Image
                  className="object-cover"
                  key={index}
                  src={file?.webContentLink}
                  alt={file?.name}
                  // style={{ width: "300px", margin: "10px" }} // Add styling as needed
                  width={300}
                  height={300}
                />
              ) : (
                <Link
                  href={file?.webViewLink}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <FaFileCode className="size-10" />
                  {file.name}
                </Link>
              )
            )}
          </div>

          <div className="p-5">
            <div className="flex justify-center md:space-x-4 text-xl font-extrabold gap-4">
              <a
                href="https://drive.google.com/file/d/1rgMxIqKMJyE7c4PRyw_fBPbunWsixy6B/view"
                className="p-5 bg-green-300 hover:text-blue-700"
              >
                File 1
              </a>
              <div>
                <p className="p-5 bg-green-300 hover:text-blue-700">File 2</p>
              </div>
              <div>
                <p className="p-5 bg-green-300 hover:text-blue-700">File 3</p>
              </div>
              <div>
                <p className="p-5 bg-green-300 hover:text-blue-700">File 4</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p className="flex justify-center text-xl text-red-600 font-semibold">
          There is no data...!!!
        </p>
      )}
    </div>
  );
}

export default AboutPage;
