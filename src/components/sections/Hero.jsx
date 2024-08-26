"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className=" flex md:flex-row flex-col justify-between items-center bg-blue-900">
      <div className="object-cover max-w-full md:max-w-[50%]">
        <motion.img
          initial={{ opacity: 0, x: -200 }} //ກຳນົດສະຸຖານະເລີ່ມຕົ້ນທີ່ອົງປະກອບຈະມີຄວາມໂປ່ງໃສເປັນ 0 ແລະ ຖືກເລື່ອນຊ້າຍໄປຫາຂວາ 200px
          animate={{ opacity: 1, x: 0 }} //ກຳນົດໃຫ້ Animation ປ່ຽນສະຖານະໃຫ້ມີຄວາມໂປ່ງໃສເປັນ 1 (ເບິ່ງໄດ້ເຕັມທີ່) ແລະ ເລື່ອນໄປຕຳແໜ່ງປົກກະຕິ (ແກນ X=0)
          transition={{ duration: 0.5, delay: 0.2 }} //Animation ນີ້ຈະໃຊ້ເວລາ 0.5 ວິນາທີໃນການປ່ຽນສະຖານະ ແລະ ຈະເລີມຕົ້ນຫຼັງຈາກຖ້າ 0,2 ວິນາທີ
          className="w-full h-full"
          src="/images/4.jpg"
          alt="image description"
        />
      </div>

      {/* Yamamoto first page */}
      <div className="items-center flex-1">
        <div className="bg-blue-900 p-10">
          <div className=" w-full items-center ">
            <div className=" text-center ">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className=" text-4xl font-extrabold "
              >
                Yamamoto Foundation
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl text-blue-200 pt-5"
              >
                Since 1983, we have welcomed more than 57,000 Chevening Scholars
                and Fellows to the UK. To celebrate our 40th anniversary, we are
                reflecting on the outstanding impact they have had.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
