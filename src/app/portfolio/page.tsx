'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import d from '../../../assets/imgPorfolio/All/d.png';
import dd from '../../../assets/imgPorfolio/All/dd.jpg';
import ddd from '../../../assets/imgPorfolio/All/ddd.jpg';
import dddd from '../../../assets/imgPorfolio/All/dddd.jpg';

import ee from '../../../assets/imgPorfolio/All/ee.jpg';
import eee from '../../../assets/imgPorfolio/All/eee.jpg';
import eeee from '../../../assets/imgPorfolio/All/eeee.jpg';
import f from '../../../assets/imgPorfolio/All/f.jpg';
import ff from '../../../assets/imgPorfolio/All/ff.jpg';
import fff from '../../../assets/imgPorfolio/All/fff.jpg';
import ffff from '../../../assets/imgPorfolio/All/ffff.jpg';
import g from '../../../assets/imgPorfolio/All/g.jpg';
import gg from '../../../assets/imgPorfolio/All/gg.jpg';
import ggg from '../../../assets/imgPorfolio/All/ggg.jpg';
import gggg from '../../../assets/imgPorfolio/All/gggg.jpg';
import h from '../../../assets/imgPorfolio/All/h.jpg';
import hh from '../../../assets/imgPorfolio/All/hh.jpg';
import hhh from '../../../assets/imgPorfolio/All/hhh.jpg';
import hhhh from '../../../assets/imgPorfolio/All/hhhh.png';
import hhhhh from '../../../assets/imgPorfolio/All/hhhhh.png';
import hhhhhh from '../../../assets/imgPorfolio/All/hhhhhh.png';
import hhhhhhh from '../../../assets/imgPorfolio/All/hhhhhhh.png';
import hhhhhhhh from '../../../assets/imgPorfolio/All/hhhhhhhh.png';
import hhhhhhhhh from '../../../assets/imgPorfolio/All/hhhhhhhhh.png';
import hhhhhhhhhh from '../../../assets/imgPorfolio/All/hhhhhhhhhh.png';
import hhhhhhhhhhh from '../../../assets/imgPorfolio/All/hhhhhhhhhhh.png';
import hhhhhhhhhhhh from '../../../assets/imgPorfolio/All/hhhhhhhhhhhh.png';
import hhhhhhhhhhhhh from '../../../assets/imgPorfolio/All/hhhhhhhhhhhh.png';
import hhhhhhhhhhhhhh from '../../../assets/imgPorfolio/All/hhhhhhhhhhhhh.png';
import hhhhhhhhhhhhhhh from '../../../assets/imgPorfolio/All/hhhhhhhhhhhhhhhh.jpg';

import j from '../../../assets/imgPorfolio/All/j.jpg';
import jj from '../../../assets/imgPorfolio/All/jj.jpg';
import jjj from '../../../assets/imgPorfolio/All/jjj.jpg';
import jjjj from '../../../assets/imgPorfolio/All/jjjj.jpg';
import k from '../../../assets/imgPorfolio/All/k.jpg';
import kk from '../../../assets/imgPorfolio/All/kk.jpg';
import kkk from '../../../assets/imgPorfolio/All/kkk.jpg';
import kkkk from '../../../assets/imgPorfolio/All/kkkk.jpg';
import l from '../../../assets/imgPorfolio/All/l.jpg';
import ll from '../../../assets/imgPorfolio/All/ll.jpg';
import lll from '../../../assets/imgPorfolio/All/lll.jpg';
import llll from '../../../assets/imgPorfolio/All/llll.jpg';
import m from '../../../assets/imgPorfolio/All/m.jpg';
import mm from '../../../assets/imgPorfolio/All/mm.jpg';
import mmm from '../../../assets/imgPorfolio/All/mmm.jpg';
import mmmm from '../../../assets/imgPorfolio/All/mmmm.jpg';
import w from '../../../assets/imgPorfolio/All/w.jpg';
import ww from '../../../assets/imgPorfolio/All/ww.jpg';
import www from '../../../assets/imgPorfolio/All/www.jpg';
import wwww from '../../../assets/imgPorfolio/All/wwww.jpg';
import wwwww from '../../../assets/imgPorfolio/All/wwwww.jpg';
import wwwwww from '../../../assets/imgPorfolio/All/wwwwww.jpg';
import wwwwwww from '../../../assets/imgPorfolio/All/wwwwwww.jpg';
import a from '../../../assets/imgPorfolio/All/a.jpg';
import aa from '../../../assets/imgPorfolio/All/aa.jpg';
import aaa from '../../../assets/imgPorfolio/All/aaa.jpg';
import aaaa from '../../../assets/imgPorfolio/All/aaaa.jpg';
import b from '../../../assets/imgPorfolio/All/b.jpg';
import bb from '../../../assets/imgPorfolio/All/bb.jpg';
import bbb from '../../../assets/imgPorfolio/All/bbb.jpg';
import bbbb from '../../../assets/imgPorfolio/All/bbbb.jpg';
import c from '../../../assets/imgPorfolio/All/c.jpg';
import cc from '../../../assets/imgPorfolio/All/cc.jpg';
import ccc from '../../../assets/imgPorfolio/All/ccc.jpg';
import cccc from '../../../assets/imgPorfolio/All/cccc.jpg';
import q from '../../../assets/imgPorfolio/All/q.jpg';
import qq from '../../../assets/imgPorfolio/All/qq.jpg';
import qqq from '../../../assets/imgPorfolio/All/qqq.jpg';
import qqqq from '../../../assets/imgPorfolio/All/qqqq.jpg';
import qqqqq from '../../../assets/imgPorfolio/All/qqqqq.jpg';
import qqqqqq from '../../../assets/imgPorfolio/All/qqqqqq.jpg';
import qqqqqqq from '../../../assets/imgPorfolio/All/qqqqqqq.jpg';
import qqqqqqqq from '../../../assets/imgPorfolio/All/qqqqqqqq.jpg';
import qqqqqqqqq from '../../../assets/imgPorfolio/All/qqqqqqqqq.jpg';
import qqqqqqqqqq from '../../../assets/imgPorfolio/All/qqqqqqqqqq.jpg';
import qqqqqqqqqqq from '../../../assets/imgPorfolio/All/qqqqqqqqqqq.jpg';
import qqqqqqqqqqqq from '../../../assets/imgPorfolio/All/qqqqqqqqqqqq.png';
import qqqqqqqqqqqqq from '../../../assets/imgPorfolio/All/qqqqqqqqqqqqq.jpg';

const Portfolio = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className=" flex justify-center items-center flex-col font-patrick "
      >
        <div className="flex items-center lg:justify-around flex-wrap justify-center pb-4 ">
          <Image
            src={k}
            alt="matka trzyma dziecko na rękach"
            width={300}
            layout="intrinsic"
            className="lg:m-[6px] mx-[4px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={kk}
            alt="ojciec z noworodkiem"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={kkk}
            alt="sesja fotograficzna sióstr"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={kkkk}
            alt="rodzina z mały dzieckiem"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={l}
            alt="modelka na sesji plenerowej"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={ll}
            alt="kobieta w sukience"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={lll}
            alt="modelka"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={llll}
            alt="kobieta pośród skał"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={m}
            alt="sesja mamy z synem"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={mm}
            alt="rodzina"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={mmm}
            alt="mama z dzieckiem"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={mmmm}
            alt="mama z dzieckiem robią smieśzne miny"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={g}
            alt="sesja zachód słonca"
            width={300}
            layout="intrinsic"
            className="lg:m-[6px] mx-[4px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={gg}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={ggg}
            alt="sesja zdjęciowa w Krakowie"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={gggg}
            alt="kobieta w drzwiach"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={h}
            alt="kobieta w marynarce"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hh}
            alt="sesja zdjęciowa w studio"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhh}
            alt="dziewczyna w czarnym stroju"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhh}
            alt="uśmiechnięta dziewczyna"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={j}
            alt="sesja zdjęciowa z modelką"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={jjj}
            alt="chrzciny"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={jjjj}
            alt="sesja zdjęciowa na łonie natury"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={jj}
            alt="kobieta w mieście"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={d}
            alt="ubieranie choinki"
            width={300}
            layout="intrinsic"
            className="lg:m-[6px] mx-[4px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={dd}
            alt="mały pies"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={ddd}
            alt="mama z córką na plaży"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={dddd}
            alt="sesja rodzinna"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />

          <Image
            src={ee}
            alt="mama z córką"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={eee}
            alt="całująca się para"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={eeee}
            alt="sesja na zachód słońca"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={f}
            alt="sesja zakochanej pary"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={ff}
            alt="studniówka"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={fff}
            alt="tańcząca para"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={ffff}
            alt="młodzi ludzie"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={a}
            alt="chłopiec robi ciasto w swetrze świątecznym"
            width={300}
            layout="intrinsic"
            className="lg:m-[6px] mx-[4px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={aa}
            alt="modelka"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={aaaa}
            alt="studniówka"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={aaa}
            alt="chrzciny"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={b}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={bb}
            alt="silna kobieta"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={bbb}
            alt="sesja fotograficzna w Brzeźnicy"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={bbbb}
            alt="kobieta w sukience"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={c}
            alt="mama z synem"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={cc}
            alt="zdjęcie fotografa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={ccc}
            alt="kobieca sesja zdjęciowa"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={cccc}
            alt="wałek"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={q}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={w}
            alt="napis rodzina"
            width={330}
            layout="intrinsic"
            className="lg:m-[6px] mx-[4px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={ww}
            alt="sesja poślubna"
            width={330}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={www}
            alt="dziewczna nad jeziorem"
            width={330}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={wwwwwww}
            alt="zdjęcie domu"
            width={330}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={wwww}
            alt="dziewczyna na ławce"
            width={330}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={wwwww}
            alt="ubranka chrzcielne"
            width={330}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={wwwwww}
            alt="niemowlak"
            width={330}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />

          <Image
            src={qq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqqqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqqqqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqqqqqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqqqqqqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqqqqqqqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqqqqqqqqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={qqqqqqqqqqqqq}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhhhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhhhhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhhhhhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhhhhhhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <Image
            src={hhhhhhhhhhhhhhh}
            alt="niemowlak"
            width={300}
            layout="intrinsic"
            placeholder="blur"
            className="lg:m-[6px] mx-[6px] my-[8px] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </motion.div>
      <Link href="/" className="top-8 left-5 fixed z-50">
        <div className="w-[70px] h-[50px] flex items-center justify-center cursor-pointer border-2 border-amber-700  animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#b45309"
            className="w-full h-full transform"
            width="50"
            height="50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 6l-6 6 6 6"
            />
          </svg>
        </div>
      </Link>
    </>
  );
};

export default Portfolio;
