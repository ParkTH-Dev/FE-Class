/*eslint-disable @typescript-eslint/no-explicit-any*/
"use client";

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from "./modal.module.css";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
  const diarogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!diarogRef.current?.open) {
      diarogRef.current?.showModal();
      diarogRef.current?.scrollTo({ top: 0 });
    }
  }, []);
  const router = useRouter();
  return createPortal(
    <dialog
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={style.Modal}
      ref={diarogRef}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
