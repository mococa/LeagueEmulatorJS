#include <stdio.h>
#include <string>
#include <node_api.h>
#include <napi.h>
#include <vector>

#include "point.h"
#include "segment.h"
#include "polygon.h"
#include "path_finder.h"
#include "cone_of_vision.h"


std::vector<NavMesh::Polygon> polygons;
NavMesh::PathFinder path_finder;


void genPolys(){
	//{NavMesh::Polygon p;p.AddPoint(25,26);p.AddPoint(32,23);p.AddPoint(37,26);p.AddPoint(37,32);p.AddPoint(32,36);p.AddPoint(29,36);p.AddPoint(25,32);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(33,42);p.AddPoint(33,44);p.AddPoint(35,42);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(42,31);p.AddPoint(42,33);p.AddPoint(44,33);p.AddPoint(44,31);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(65,22);p.AddPoint(69,19);p.AddPoint(73,21);p.AddPoint(73,23);p.AddPoint(70,27);p.AddPoint(67,27);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(23,63);p.AddPoint(19,66);p.AddPoint(19,68);p.AddPoint(21,71);p.AddPoint(24,71);p.AddPoint(27,66);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(61,58);p.AddPoint(58,61);p.AddPoint(58,64);p.AddPoint(60,65);p.AddPoint(62,65);p.AddPoint(66,62);p.AddPoint(64,59);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(75,46);p.AddPoint(80,46);p.AddPoint(80,49);p.AddPoint(78,52);p.AddPoint(75,48);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(45,75);p.AddPoint(43,76);p.AddPoint(43,80);p.AddPoint(45,82);p.AddPoint(48,77);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(92,31);p.AddPoint(99,31);p.AddPoint(99,43);p.AddPoint(96,60);p.AddPoint(91,72);p.AddPoint(88,74);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(93,41);p.AddPoint(85,69);p.AddPoint(85,73);p.AddPoint(88,74);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(72,83);p.AddPoint(37,99);p.AddPoint(54,99);p.AddPoint(68,94);p.AddPoint(76,88);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(32,92);p.AddPoint(30,96);p.AddPoint(33,100);p.AddPoint(45,99);p.AddPoint(62,91);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(81,96);p.AddPoint(84,96);p.AddPoint(95,106);p.AddPoint(97,110);p.AddPoint(94,121);p.AddPoint(87,115);p.AddPoint(81,101);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(73,103);p.AddPoint(73,111);p.AddPoint(89,116);p.AddPoint(82,97);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(34,107);p.AddPoint(34,118);p.AddPoint(50,107);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(63,107);p.AddPoint(67,110);p.AddPoint(67,115);p.AddPoint(53,124);p.AddPoint(43,107);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(35,116);p.AddPoint(53,116);p.AddPoint(46,107);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(32,128);p.AddPoint(32,157);p.AddPoint(38,157);p.AddPoint(38,125);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(36,126);p.AddPoint(39,124);p.AddPoint(43,124);p.AddPoint(48,132);p.AddPoint(48,142);p.AddPoint(36,155);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(94,128);p.AddPoint(114,126);p.AddPoint(121,132);p.AddPoint(122,136);p.AddPoint(94,132);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(103,115);p.AddPoint(104,128);p.AddPoint(118,139);p.AddPoint(114,126);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(103,153);p.AddPoint(103,142);p.AddPoint(117,142);p.AddPoint(108,153);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(110,131);p.AddPoint(111,150);p.AddPoint(122,136);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(67,142);p.AddPoint(70,138);p.AddPoint(78,122);p.AddPoint(62,129);p.AddPoint(61,136);p.AddPoint(62,142);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(88,127);p.AddPoint(88,131);p.AddPoint(67,130);p.AddPoint(63,129);p.AddPoint(76,121);p.AddPoint(83,123);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(77,147);p.AddPoint(77,142);p.AddPoint(78,141);p.AddPoint(88,141);p.AddPoint(89,142);p.AddPoint(90,147);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(89,146);p.AddPoint(92,156);p.AddPoint(93,167);p.AddPoint(79,143);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(85,142);p.AddPoint(83,171);p.AddPoint(90,169);p.AddPoint(93,167);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(70,155);p.AddPoint(69,158);p.AddPoint(69,163);p.AddPoint(72,167);p.AddPoint(76,169);p.AddPoint(80,170);p.AddPoint(73,155);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(74,160);p.AddPoint(86,160);p.AddPoint(83,171);p.AddPoint(76,169);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(114,163);p.AddPoint(114,169);p.AddPoint(129,144);p.AddPoint(125,145);p.AddPoint(121,150);p.AddPoint(116,159);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(131,144);p.AddPoint(127,144);p.AddPoint(117,159);p.AddPoint(131,148);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(141,164);p.AddPoint(137,166);p.AddPoint(125,185);p.AddPoint(125,191);p.AddPoint(130,197);p.AddPoint(135,197);p.AddPoint(138,181);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(141,164);p.AddPoint(149,169);p.AddPoint(148,171);p.AddPoint(131,186);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(146,197);p.AddPoint(145,193);p.AddPoint(146,185);p.AddPoint(150,181);p.AddPoint(154,178);p.AddPoint(159,177);p.AddPoint(162,178);p.AddPoint(172,189);p.AddPoint(159,194);p.AddPoint(151,198);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(157,190);p.AddPoint(171,200);p.AddPoint(173,196);p.AddPoint(172,189);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(170,196);p.AddPoint(160,196);p.AddPoint(158,183);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(171,215);p.AddPoint(172,210);p.AddPoint(167,206);p.AddPoint(161,204);p.AddPoint(156,206);p.AddPoint(154,209);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(163,224);p.AddPoint(154,208);p.AddPoint(153,211);p.AddPoint(154,220);p.AddPoint(158,226);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(157,220);p.AddPoint(168,208);p.AddPoint(154,209);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(179,197);p.AddPoint(179,206);p.AddPoint(182,209);p.AddPoint(189,205);p.AddPoint(182,199);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(182,216);p.AddPoint(183,199);p.AddPoint(190,206);p.AddPoint(194,212);p.AddPoint(188,227);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(187,236);p.AddPoint(191,216);p.AddPoint(182,215);p.AddPoint(177,228);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(181,221);p.AddPoint(173,230);p.AddPoint(185,234);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(183,228);p.AddPoint(165,239);p.AddPoint(167,234);p.AddPoint(175,228);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(175,232);p.AddPoint(169,239);p.AddPoint(165,240);p.AddPoint(165,234);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(154,239);p.AddPoint(169,238);p.AddPoint(169,234);p.AddPoint(155,234);p.AddPoint(154,235);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(153,245);p.AddPoint(145,259);p.AddPoint(165,245);polygons.push_back(p);}

	// sr 14k x 14k
	{NavMesh::Polygon p;p.AddPoint(2817,1033);p.AddPoint(2903,900);p.AddPoint(3035,815);p.AddPoint(3170,890);p.AddPoint(3240,1035);p.AddPoint(3167,1153);p.AddPoint(3043,1238);p.AddPoint(2897,1157);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(982,1134);p.AddPoint(826,1446);p.AddPoint(980,1723);p.AddPoint(1176,1728);p.AddPoint(1326,1720);p.AddPoint(1494,1438);p.AddPoint(1314,1142);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6073,1500);p.AddPoint(7500,1500);p.AddPoint(7497,1787);p.AddPoint(6080,1817);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7803,1500);p.AddPoint(7807,1787);p.AddPoint(8490,1963);p.AddPoint(8633,1740);p.AddPoint(8753,1497);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4280,1512);p.AddPoint(4347,1427);p.AddPoint(4420,1408);p.AddPoint(4500,1410);p.AddPoint(4642,1526);p.AddPoint(4648,2306);p.AddPoint(4554,2844);p.AddPoint(4370,3280);p.AddPoint(4223,3080);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5564,1570);p.AddPoint(5310,2060);p.AddPoint(5273,1570);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5030,1570);p.AddPoint(5030,3027);p.AddPoint(5440,3030);p.AddPoint(5450,1567);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7467,1737);p.AddPoint(6667,2163);p.AddPoint(6900,1617);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4273,1790);p.AddPoint(4200,2633);p.AddPoint(4560,2217);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5866,1858);p.AddPoint(5863,2073);p.AddPoint(6073,2177);p.AddPoint(6390,2303);p.AddPoint(6773,2300);p.AddPoint(6833,2250);p.AddPoint(6913,2153);p.AddPoint(6076,1498);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5117,2137);p.AddPoint(5867,2557);p.AddPoint(5463,3233);p.AddPoint(5130,3233);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6840,2220);p.AddPoint(7407,1660);p.AddPoint(6153,1697);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8277,2313);p.AddPoint(8700,2493);p.AddPoint(9133,2707);p.AddPoint(8587,3230);p.AddPoint(8100,2960);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8737,2590);p.AddPoint(9563,2590);p.AddPoint(9690,2677);p.AddPoint(9537,2733);p.AddPoint(9317,2813);p.AddPoint(8793,2953);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7443,2890);p.AddPoint(8227,2900);p.AddPoint(7610,2640);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2563,2973);p.AddPoint(2653,2850);p.AddPoint(2783,2767);p.AddPoint(2920,2840);p.AddPoint(2983,2970);p.AddPoint(2910,3097);p.AddPoint(2780,3180);p.AddPoint(2650,3107);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6127,2983);p.AddPoint(6587,2917);p.AddPoint(6753,3000);p.AddPoint(6750,3287);p.AddPoint(6597,3410);p.AddPoint(5933,3690);p.AddPoint(5727,3633);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8247,2997);p.AddPoint(7913,3000);p.AddPoint(7623,2697);p.AddPoint(8337,2707);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7370,3002);p.AddPoint(7227,3000);p.AddPoint(7220,2390);p.AddPoint(7447,2157);p.AddPoint(7630,2157);p.AddPoint(7750,2293);p.AddPoint(7840,2707);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4093,3050);p.AddPoint(4273,2050);p.AddPoint(4420,2740);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3967,3213);p.AddPoint(4277,2477);p.AddPoint(4387,3053);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9437,3220);p.AddPoint(9090,3370);p.AddPoint(8760,3720);p.AddPoint(8943,3983);p.AddPoint(9363,3603);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(630,3350);p.AddPoint(703,3217);p.AddPoint(830,3140);p.AddPoint(967,3213);p.AddPoint(1040,3347);p.AddPoint(960,3480);p.AddPoint(837,3560);p.AddPoint(703,3487);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7433,3423);p.AddPoint(7543,3307);p.AddPoint(7743,3310);p.AddPoint(7917,3420);p.AddPoint(7640,3653);p.AddPoint(7433,3550);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7643,3450);p.AddPoint(7640,4247);p.AddPoint(8183,4233);p.AddPoint(8203,4100);p.AddPoint(8170,3730);p.AddPoint(7917,3420);p.AddPoint(7740,3310);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4827,3540);p.AddPoint(5207,3543);p.AddPoint(5383,4103);p.AddPoint(4530,4027);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4067,3687);p.AddPoint(3883,3560);p.AddPoint(3833,3453);p.AddPoint(4297,2570);p.AddPoint(4372,3274);p.AddPoint(4164,3646);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7020,3747);p.AddPoint(7087,4427);p.AddPoint(6700,4290);p.AddPoint(6703,3850);p.AddPoint(6780,3747);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9077,3750);p.AddPoint(8823,4223);p.AddPoint(8753,3863);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8710,3880);p.AddPoint(8767,3713);p.AddPoint(8870,3603);p.AddPoint(8923,4770);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4450,4064);p.AddPoint(4770,4430);p.AddPoint(4896,4558);p.AddPoint(5222,4742);p.AddPoint(5398,4702);p.AddPoint(5487,4287);p.AddPoint(5326,3908);p.AddPoint(4607,3907);p.AddPoint(4444,3950);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7107,4007);p.AddPoint(7577,4147);p.AddPoint(7257,4247);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7643,4043);p.AddPoint(8183,4237);p.AddPoint(8097,4523);p.AddPoint(6927,4210);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6233,4280);p.AddPoint(6077,4277);p.AddPoint(5897,4150);p.AddPoint(5750,3840);p.AddPoint(5700,3643);p.AddPoint(5773,3553);p.AddPoint(6237,3293);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2160,4400);p.AddPoint(2590,4297);p.AddPoint(2883,4610);p.AddPoint(2367,4753);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3313,4420);p.AddPoint(3367,4253);p.AddPoint(3313,4157);p.AddPoint(3297,4140);p.AddPoint(3183,4123);p.AddPoint(2327,4370);p.AddPoint(2883,4603);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7100,4437);p.AddPoint(6703,4290);p.AddPoint(6947,3880);p.AddPoint(7413,4157);p.AddPoint(8090,4520);p.AddPoint(7540,4530);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8873,4457);p.AddPoint(8270,4960);p.AddPoint(8263,5037);p.AddPoint(8287,5113);p.AddPoint(8340,5183);p.AddPoint(8410,5230);p.AddPoint(9000,5100);p.AddPoint(9223,5007);p.AddPoint(9243,4787);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1217,4560);p.AddPoint(1287,4497);p.AddPoint(2163,4400);p.AddPoint(2883,4603);p.AddPoint(2360,4750);p.AddPoint(1880,4807);p.AddPoint(1290,4840);p.AddPoint(1210,4730);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6083,4617);p.AddPoint(6057,4673);p.AddPoint(5973,5627);p.AddPoint(6283,5960);p.AddPoint(6390,5400);p.AddPoint(6390,5077);p.AddPoint(6280,4597);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5743,4633);p.AddPoint(5243,4723);p.AddPoint(5413,4190);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9507,4667);p.AddPoint(9607,4803);p.AddPoint(9227,5003);p.AddPoint(9073,4873);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8707,4793);p.AddPoint(8640,4093);p.AddPoint(8710,3880);p.AddPoint(8900,4303);p.AddPoint(9020,4593);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6783,5017);p.AddPoint(7303,5013);p.AddPoint(7310,5320);p.AddPoint(6777,5737);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5390,5023);p.AddPoint(6283,5960);p.AddPoint(5650,5017);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5580,5113);p.AddPoint(6270,5063);p.AddPoint(6010,5607);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2500,5207);p.AddPoint(3087,5693);p.AddPoint(3727,5453);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2503,5210);p.AddPoint(3670,4940);p.AddPoint(4180,5500);p.AddPoint(3377,5543);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1357,5373);p.AddPoint(1367,7297);p.AddPoint(1523,7290);p.AddPoint(2040,6910);p.AddPoint(2030,6440);p.AddPoint(1973,6077);p.AddPoint(1643,5333);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1357,5373);p.AddPoint(1940,5290);p.AddPoint(2197,5480);p.AddPoint(2180,5693);p.AddPoint(1360,6087);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6160,5403);p.AddPoint(7200,5407);p.AddPoint(6490,5960);p.AddPoint(6283,5960);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2800,5560);p.AddPoint(2620,5900);p.AddPoint(2598,6328);p.AddPoint(2827,5973);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4490,5580);p.AddPoint(4180,5600);p.AddPoint(2970,5090);p.AddPoint(3720,4820);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3165,5610);p.AddPoint(2793,6013);p.AddPoint(2687,5250);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3150,5660);p.AddPoint(2930,5767);p.AddPoint(2560,5213);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4020,5690);p.AddPoint(4170,5600);p.AddPoint(3100,5090);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2767,5760);p.AddPoint(2397,6100);p.AddPoint(2373,6210);p.AddPoint(2417,6527);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3530,5940);p.AddPoint(3893,6853);p.AddPoint(4080,6727);p.AddPoint(4160,6527);p.AddPoint(4023,6127);p.AddPoint(3763,5897);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4487,5970);p.AddPoint(4540,6830);p.AddPoint(4683,7313);p.AddPoint(5030,7253);p.AddPoint(5263,7113);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4387,5987);p.AddPoint(4520,5927);p.AddPoint(4787,5910);p.AddPoint(5437,6487);p.AddPoint(5473,6663);p.AddPoint(5420,6880);p.AddPoint(5263,7117);p.AddPoint(4460,6190);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4443,6003);p.AddPoint(4570,6740);p.AddPoint(4940,6323);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3673,6113);p.AddPoint(3630,6393);p.AddPoint(3840,6317);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1937,6337);p.AddPoint(2047,5547);p.AddPoint(1527,5780);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2400,6420);p.AddPoint(2467,6867);p.AddPoint(2553,6870);p.AddPoint(2627,6813);p.AddPoint(2630,5963);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3103,6437);p.AddPoint(3047,6657);p.AddPoint(3263,6833);p.AddPoint(3453,6887);p.AddPoint(3823,6913);p.AddPoint(3987,6790);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3273,6583);p.AddPoint(3660,6490);p.AddPoint(3470,6647);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3327,6713);p.AddPoint(3823,6120);p.AddPoint(3903,6793);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4367,7040);p.AddPoint(4533,7253);p.AddPoint(4680,7310);p.AddPoint(4713,6677);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5790,7047);p.AddPoint(5897,7013);p.AddPoint(6057,7013);p.AddPoint(6183,7083);p.AddPoint(6203,7310);p.AddPoint(6087,7450);p.AddPoint(5693,7210);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5810,7053);p.AddPoint(4923,8290);p.AddPoint(5043,8307);p.AddPoint(5917,7783);p.AddPoint(6143,7337);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3507,7330);p.AddPoint(4033,7770);p.AddPoint(4113,7640);p.AddPoint(4187,7413);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3720,7333);p.AddPoint(3753,8247);p.AddPoint(4103,7650);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2063,7397);p.AddPoint(2267,7407);p.AddPoint(2360,7553);p.AddPoint(2303,7767);p.AddPoint(2007,7930);p.AddPoint(1793,7983);p.AddPoint(1910,7517);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4187,7417);p.AddPoint(3970,7243);p.AddPoint(3333,7190);p.AddPoint(2787,7197);p.AddPoint(2733,7347);p.AddPoint(2827,7463);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5093,7747);p.AddPoint(4577,8140);p.AddPoint(4810,8267);p.AddPoint(5030,8310);p.AddPoint(5623,7363);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7027,7780);p.AddPoint(6930,7810);p.AddPoint(6500,8397);p.AddPoint(7073,8120);p.AddPoint(7137,8007);p.AddPoint(7137,7927);p.AddPoint(7107,7867);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4660,7793);p.AddPoint(5643,7530);p.AddPoint(5087,7927);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4593,7797);p.AddPoint(5483,7600);p.AddPoint(4940,7983);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1423,7803);p.AddPoint(2020,7447);p.AddPoint(1800,7990);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3900,7810);p.AddPoint(3913,8283);p.AddPoint(3503,8037);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1317,7827);p.AddPoint(1763,7637);p.AddPoint(1797,7987);p.AddPoint(1637,8107);p.AddPoint(1293,8153);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1317,7830);p.AddPoint(1640,8107);p.AddPoint(1310,8833);p.AddPoint(1260,8527);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4577,8143);p.AddPoint(4473,8040);p.AddPoint(4440,7977);p.AddPoint(4413,7860);p.AddPoint(4470,7777);p.AddPoint(5807,7747);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1520,8163);p.AddPoint(1627,8663);p.AddPoint(1303,8377);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2927,8273);p.AddPoint(2903,8370);p.AddPoint(2177,9060);p.AddPoint(2070,8560);p.AddPoint(2143,8310);p.AddPoint(2667,8110);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4103,8357);p.AddPoint(3700,7870);p.AddPoint(3353,8633);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4140,8367);p.AddPoint(4400,8573);p.AddPoint(4010,8610);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6417,8453);p.AddPoint(6880,7890);p.AddPoint(7073,8083);p.AddPoint(6617,8480);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3400,8530);p.AddPoint(3403,7927);p.AddPoint(3487,7867);p.AddPoint(3843,7773);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6540,8567);p.AddPoint(6283,8767);p.AddPoint(6060,8837);p.AddPoint(5967,8853);p.AddPoint(5903,8833);p.AddPoint(5900,8783);p.AddPoint(6827,8140);p.AddPoint(6783,8333);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4463,8580);p.AddPoint(4063,8390);p.AddPoint(3723,8903);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3230,8640);p.AddPoint(3267,8737);p.AddPoint(3567,9117);p.AddPoint(4217,8433);p.AddPoint(3937,8177);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3710,8677);p.AddPoint(3987,8787);p.AddPoint(3597,9057);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3307,8697);p.AddPoint(3450,9110);p.AddPoint(3640,8823);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2123,8797);p.AddPoint(2240,9377);p.AddPoint(2370,8923);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1310,8837);p.AddPoint(1357,9093);p.AddPoint(1613,9193);p.AddPoint(1843,9230);p.AddPoint(1830,9163);p.AddPoint(1800,9067);p.AddPoint(1673,8663);p.AddPoint(1457,8207);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3570,9117);p.AddPoint(3467,9227);p.AddPoint(3360,8773);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1843,9233);p.AddPoint(1780,9277);p.AddPoint(1420,9090);p.AddPoint(1587,8897);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5503,9233);p.AddPoint(5060,9353);p.AddPoint(4684,9566);p.AddPoint(4896,9874);p.AddPoint(5336,9834);p.AddPoint(5670,9516);p.AddPoint(5714,9444);p.AddPoint(5710,9378);p.AddPoint(5673,9310);p.AddPoint(5610,9257);p.AddPoint(5557,9233);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4407,9633);p.AddPoint(4513,9770);p.AddPoint(5533,9237);p.AddPoint(5017,9343);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2163,9663);p.AddPoint(2173,9397);p.AddPoint(2237,8680);p.AddPoint(2390,9113);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2150,9687);p.AddPoint(2247,9630);p.AddPoint(2413,9163);p.AddPoint(2407,8357);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6863,6423);p.AddPoint(6853,6323);p.AddPoint(6910,6180);p.AddPoint(7127,5990);p.AddPoint(7317,5870);p.AddPoint(7190,6273);p.AddPoint(7120,6397);p.AddPoint(7003,6457);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7308,5875);p.AddPoint(7568,5723);p.AddPoint(7713,5653);p.AddPoint(7823,5615);p.AddPoint(7930,5585);p.AddPoint(8025,5568);p.AddPoint(8110,5598);p.AddPoint(8070,5668);p.AddPoint(7770,5823);p.AddPoint(7180,6025);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7770,5818);p.AddPoint(7408,6065);p.AddPoint(7195,5955);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7105,6353);p.AddPoint(7578,5910);p.AddPoint(7225,5950);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7886,6968);p.AddPoint(7900,7036);p.AddPoint(8206,7206);p.AddPoint(8354,7196);p.AddPoint(8500,7010);p.AddPoint(8426,6450);p.AddPoint(7984,6704);p.AddPoint(7934,6814);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8294,7158);p.AddPoint(8602,6938);p.AddPoint(8758,6818);p.AddPoint(9376,6252);p.AddPoint(9170,6162);p.AddPoint(8980,6136);p.AddPoint(8916,6166);p.AddPoint(8420,6452);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9498,6643);p.AddPoint(8548,6795);p.AddPoint(9377,6255);p.AddPoint(9527,6413);p.AddPoint(9540,6457);p.AddPoint(9538,6548);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8582,6867);p.AddPoint(9382,6648);p.AddPoint(8832,6403);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9563,7412);p.AddPoint(9488,7190);p.AddPoint(9333,7130);p.AddPoint(8993,7192);p.AddPoint(8757,7328);p.AddPoint(8585,7568);p.AddPoint(8505,7782);p.AddPoint(8548,7922);p.AddPoint(8682,8095);p.AddPoint(8850,8247);p.AddPoint(9435,7813);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9680,8433);p.AddPoint(9498,8512);p.AddPoint(9170,8540);p.AddPoint(9472,8205);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9425,7750);p.AddPoint(9493,8335);p.AddPoint(8978,7962);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8817,8213);p.AddPoint(9172,8542);p.AddPoint(9575,8318);p.AddPoint(9312,7830);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6715,9117);p.AddPoint(6732,9363);p.AddPoint(6813,9432);p.AddPoint(7237,9430);p.AddPoint(7242,8703);p.AddPoint(6983,8892);p.AddPoint(6908,8950);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7457,8537);p.AddPoint(7542,8493);p.AddPoint(7788,8625);p.AddPoint(7993,8820);p.AddPoint(7632,9040);p.AddPoint(6865,9042);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7468,8537);p.AddPoint(7222,8715);p.AddPoint(7282,8835);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8368,9433);p.AddPoint(8585,9355);p.AddPoint(8293,9090);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8435,9333);p.AddPoint(7637,9335);p.AddPoint(7633,8893);p.AddPoint(7918,8753);p.AddPoint(8423,9208);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7637,9368);p.AddPoint(7738,9848);p.AddPoint(7922,9848);p.AddPoint(7925,9065);p.AddPoint(7633,8942);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1378,9553);p.AddPoint(1625,9685);p.AddPoint(1818,9823);p.AddPoint(1830,9965);p.AddPoint(1383,10188);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4894,9872);p.AddPoint(5072,10134);p.AddPoint(5380,10344);p.AddPoint(5318,9648);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5034,9954);p.AddPoint(5116,10354);p.AddPoint(5260,10732);p.AddPoint(5382,10344);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5172,10140);p.AddPoint(4932,11072);p.AddPoint(5258,10730);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5182,10328);p.AddPoint(4936,11070);p.AddPoint(4588,11060);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4028,9908);p.AddPoint(4152,10044);p.AddPoint(3392,10744);p.AddPoint(3464,10444);p.AddPoint(3542,10324);p.AddPoint(3732,10152);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3394,10746);p.AddPoint(3484,10936);p.AddPoint(3594,10992);p.AddPoint(3694,11024);p.AddPoint(3894,10990);p.AddPoint(4292,10654);p.AddPoint(3854,10144);p.AddPoint(3462,10454);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3894,10992);p.AddPoint(4014,10586);p.AddPoint(4678,10748);p.AddPoint(4134,11118);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4048,11144);p.AddPoint(4194,11358);p.AddPoint(4930,11072);p.AddPoint(4826,10696);p.AddPoint(3972,10992);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4666,10818);p.AddPoint(5094,10478);p.AddPoint(4938,10872);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2834,9070);p.AddPoint(2912,9022);p.AddPoint(2946,9050);p.AddPoint(3042,9238);p.AddPoint(3068,9388);p.AddPoint(3086,9526);p.AddPoint(3046,9626);p.AddPoint(2936,9690);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3044,9628);p.AddPoint(2656,10470);p.AddPoint(2384,11026);p.AddPoint(2330,11102);p.AddPoint(2102,11366);p.AddPoint(1988,11442);p.AddPoint(1928,11476);p.AddPoint(1846,11494);p.AddPoint(2624,9904);p.AddPoint(2940,9318);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2768,9732);p.AddPoint(1756,10964);p.AddPoint(1654,11368);p.AddPoint(1844,11494);p.AddPoint(1930,11476);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1492,11120);p.AddPoint(1654,11366);p.AddPoint(2474,10248);p.AddPoint(1840,10160);p.AddPoint(1384,10188);p.AddPoint(1410,10828);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1762,9848);p.AddPoint(2022,10294);p.AddPoint(1384,10188);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8903,2078);p.AddPoint(9290,1613);p.AddPoint(9790,1973);p.AddPoint(9400,2160);p.AddPoint(9095,2160);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9188,1533);p.AddPoint(9043,1963);p.AddPoint(10113,1978);p.AddPoint(10278,1868);p.AddPoint(10275,1665);p.AddPoint(10070,1533);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9788,3020);p.AddPoint(9978,3080);p.AddPoint(9995,3190);p.AddPoint(10065,3688);p.AddPoint(9178,3585);p.AddPoint(9158,3383);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10623,2043);p.AddPoint(10823,2965);p.AddPoint(11050,2800);p.AddPoint(11293,2570);p.AddPoint(11093,1770);p.AddPoint(10798,1663);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10215,2798);p.AddPoint(10218,2838);p.AddPoint(10353,2995);p.AddPoint(10475,3065);p.AddPoint(10680,3068);p.AddPoint(10970,2858);p.AddPoint(10753,2065);p.AddPoint(10265,2708);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10803,1975);p.AddPoint(10400,2540);p.AddPoint(11170,2685);p.AddPoint(11335,2585);p.AddPoint(11353,2418);p.AddPoint(11333,2313);p.AddPoint(11200,1973);p.AddPoint(11095,1770);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9453,3588);p.AddPoint(10488,4010);p.AddPoint(10600,3700);p.AddPoint(9850,3310);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10328,3420);p.AddPoint(10430,3453);p.AddPoint(10540,3510);p.AddPoint(10598,3700);p.AddPoint(10450,4118);p.AddPoint(10280,4253);p.AddPoint(10105,4133);p.AddPoint(9878,3865);p.AddPoint(10135,3458);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9610,3598);p.AddPoint(9963,3945);p.AddPoint(10175,3615);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9873,4400);p.AddPoint(9998,4533);p.AddPoint(10383,4153);p.AddPoint(10233,3993);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12638,4880);p.AddPoint(12395,4753);p.AddPoint(12210,4623);p.AddPoint(12110,3485);p.AddPoint(12240,3018);p.AddPoint(12288,3045);p.AddPoint(12378,3113);p.AddPoint(12525,3323);p.AddPoint(12620,3650);p.AddPoint(12635,3983);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12238,3015);p.AddPoint(12038,3040);p.AddPoint(11945,3070);p.AddPoint(11828,3188);p.AddPoint(11688,3350);p.AddPoint(11650,3425);p.AddPoint(11623,3510);p.AddPoint(12285,4630);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11520,3930);p.AddPoint(11560,3703);p.AddPoint(11650,3425);p.AddPoint(12165,4273);p.AddPoint(11593,4298);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11430,4295);p.AddPoint(11463,4573);p.AddPoint(11758,4210);p.AddPoint(11563,3763);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11110,5420);p.AddPoint(11200,5365);p.AddPoint(11175,5240);p.AddPoint(10958,4933);p.AddPoint(10960,5070);p.AddPoint(10995,5273);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10953,4933);p.AddPoint(10960,5075);p.AddPoint(11185,5345);p.AddPoint(11113,4723);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11485,4230);p.AddPoint(10958,4930);p.AddPoint(11085,5075);p.AddPoint(11783,4153);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11873,4758);p.AddPoint(11775,4813);p.AddPoint(11608,5285);p.AddPoint(11618,5833);p.AddPoint(11838,5040);p.AddPoint(11865,4860);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11835,5535);p.AddPoint(11838,4865);p.AddPoint(11648,5423);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11873,5420);p.AddPoint(11938,5885);p.AddPoint(11850,6130);p.AddPoint(11353,6328);p.AddPoint(11095,6173);p.AddPoint(11115,6078);p.AddPoint(11610,5610);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11873,5420);p.AddPoint(11800,5083);p.AddPoint(11570,5800);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12260,5175);p.AddPoint(12223,5223);p.AddPoint(12210,5293);p.AddPoint(12388,5608);p.AddPoint(12413,5255);p.AddPoint(12373,5220);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12663,5345);p.AddPoint(12275,5205);p.AddPoint(12230,5278);p.AddPoint(12328,5738);p.AddPoint(12428,6030);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11658,6888);p.AddPoint(11740,7025);p.AddPoint(11943,7040);p.AddPoint(12105,6910);p.AddPoint(12195,6445);p.AddPoint(11988,6513);p.AddPoint(11700,6673);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12388,5828);p.AddPoint(12418,6223);p.AddPoint(12758,6058);p.AddPoint(12723,5565);p.AddPoint(12660,5345);p.AddPoint(12528,5298);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11953,7003);p.AddPoint(12558,6638);p.AddPoint(12518,6208);p.AddPoint(12018,6578);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12305,6490);p.AddPoint(12455,6003);p.AddPoint(12760,6055);p.AddPoint(12678,6620);p.AddPoint(12463,6700);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10603,5438);p.AddPoint(10568,5283);p.AddPoint(10413,5378);p.AddPoint(10253,5500);p.AddPoint(10160,5590);p.AddPoint(9903,6098);p.AddPoint(9998,6183);p.AddPoint(10610,6193);p.AddPoint(10618,5913);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10783,5813);p.AddPoint(10513,5980);p.AddPoint(10523,5365);p.AddPoint(10763,5703);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10555,5348);p.AddPoint(10740,5685);p.AddPoint(10458,5640);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9570,5855);p.AddPoint(9678,5793);p.AddPoint(10265,5563);p.AddPoint(10040,6103);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9645,5880);p.AddPoint(9928,6118);p.AddPoint(10250,5535);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9958,6108);p.AddPoint(10255,6680);p.AddPoint(10535,6600);p.AddPoint(10618,6523);p.AddPoint(10605,6053);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10048,7200);p.AddPoint(10450,7233);p.AddPoint(10695,7248);p.AddPoint(11230,7235);p.AddPoint(11283,7093);p.AddPoint(11210,7005);p.AddPoint(10388,7005);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9903,6805);p.AddPoint(9840,7030);p.AddPoint(10048,7200);p.AddPoint(10545,7130);p.AddPoint(10298,6930);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10278,6535);p.AddPoint(10305,7073);p.AddPoint(10018,6923);p.AddPoint(10083,6195);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9903,6808);p.AddPoint(10120,6318);p.AddPoint(10090,7055);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10488,8505);p.AddPoint(10255,8515);p.AddPoint(9995,8315);p.AddPoint(9863,7920);p.AddPoint(10158,7928);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11030,7818);p.AddPoint(10903,8075);p.AddPoint(10415,7783);p.AddPoint(10560,7553);p.AddPoint(10750,7610);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9948,7718);p.AddPoint(10203,7528);p.AddPoint(10325,8073);p.AddPoint(10390,8423);p.AddPoint(9865,7923);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10848,8010);p.AddPoint(10165,7780);p.AddPoint(10200,7528);p.AddPoint(10560,7553);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10233,8143);p.AddPoint(10670,7788);p.AddPoint(10100,7668);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11628,7563);p.AddPoint(11470,7568);p.AddPoint(11393,7633);p.AddPoint(11315,8565);p.AddPoint(11630,7973);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11648,8230);p.AddPoint(11623,8348);p.AddPoint(11065,8845);p.AddPoint(11025,8728);p.AddPoint(11623,7840);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9505,8853);p.AddPoint(9945,8833);p.AddPoint(10820,9420);p.AddPoint(10285,9615);p.AddPoint(9873,9330);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10068,9030);p.AddPoint(11090,8858);p.AddPoint(11513,9230);p.AddPoint(11258,9293);p.AddPoint(10538,9443);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10285,9618);p.AddPoint(11345,9228);p.AddPoint(11248,8630);p.AddPoint(10183,9110);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11440,8455);p.AddPoint(11140,9015);p.AddPoint(10808,8888);p.AddPoint(11303,8385);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11425,9185);p.AddPoint(11238,8880);p.AddPoint(11193,9170);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12648,7143);p.AddPoint(12488,7150);p.AddPoint(11985,7530);p.AddPoint(11973,8008);p.AddPoint(12080,8520);p.AddPoint(12668,8053);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11813,8775);p.AddPoint(11825,8963);p.AddPoint(12083,9153);p.AddPoint(12658,9073);p.AddPoint(11975,8675);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12105,8180);p.AddPoint(11913,8910);p.AddPoint(12660,9070);p.AddPoint(12668,8055);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8295,9835);p.AddPoint(8668,10510);p.AddPoint(9195,10903);p.AddPoint(9495,10420);p.AddPoint(8705,9815);p.AddPoint(8595,9770);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9005,9880);p.AddPoint(9300,10130);p.AddPoint(9580,10385);p.AddPoint(9578,10500);p.AddPoint(9170,10560);p.AddPoint(8573,9788);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8610,10140);p.AddPoint(8723,10903);p.AddPoint(9195,10905);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7425,11073);p.AddPoint(7265,11190);p.AddPoint(7270,11440);p.AddPoint(7435,11523);p.AddPoint(7893,11458);p.AddPoint(8250,10820);p.AddPoint(8183,10750);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7783,10168);p.AddPoint(7785,11183);p.AddPoint(8255,10815);p.AddPoint(8235,10593);p.AddPoint(8060,10290);p.AddPoint(7895,10175);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7000,10698);p.AddPoint(7278,10698);p.AddPoint(7275,10158);p.AddPoint(6923,10003);p.AddPoint(6900,10135);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6588,10828);p.AddPoint(6588,11023);p.AddPoint(6473,11135);p.AddPoint(6280,11138);p.AddPoint(6100,11025);p.AddPoint(6110,10828);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5920,9920);p.AddPoint(5830,10203);p.AddPoint(5825,10303);p.AddPoint(5843,10708);p.AddPoint(6100,11023);p.AddPoint(6383,10955);p.AddPoint(6383,10220);p.AddPoint(6248,9915);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7060,10413);p.AddPoint(6133,10413);p.AddPoint(6248,9918);p.AddPoint(6483,9913);p.AddPoint(6925,10005);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4710,11633);p.AddPoint(4360,11750);p.AddPoint(4140,11855);p.AddPoint(4205,12018);p.AddPoint(4673,11753);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5435,11210);p.AddPoint(4888,11743);p.AddPoint(5328,11958);p.AddPoint(5745,12133);p.AddPoint(5913,11488);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5190,11860);p.AddPoint(4580,11825);p.AddPoint(4963,11600);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4275,11945);p.AddPoint(4838,11798);p.AddPoint(5120,11515);p.AddPoint(4710,11630);p.AddPoint(4365,11748);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6268,12155);p.AddPoint(6388,12285);p.AddPoint(6575,12270);p.AddPoint(6710,12150);p.AddPoint(6775,12040);p.AddPoint(6798,11865);p.AddPoint(6483,11550);p.AddPoint(6143,11548);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5745,11448);p.AddPoint(6105,11443);p.AddPoint(6393,11740);p.AddPoint(5680,11740);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6645,11443);p.AddPoint(6793,11445);p.AddPoint(6798,11873);p.AddPoint(6338,11638);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3905,12468);p.AddPoint(3740,12578);p.AddPoint(3743,12783);p.AddPoint(3950,12910);p.AddPoint(4840,12910);p.AddPoint(4978,12478);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5035,12473);p.AddPoint(4760,12805);p.AddPoint(4413,12608);p.AddPoint(4625,12278);p.AddPoint(4940,12285);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4073,12488);p.AddPoint(4700,12425);p.AddPoint(4383,12775);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5310,12945);p.AddPoint(5428,12710);p.AddPoint(5630,12478);p.AddPoint(6215,12653);p.AddPoint(6213,12948);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6523,12658);p.AddPoint(6523,12948);p.AddPoint(7483,12955);p.AddPoint(7948,12940);p.AddPoint(8163,12580);p.AddPoint(8160,12368);p.AddPoint(7945,12260);p.AddPoint(6643,12620);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7290,12135);p.AddPoint(7630,12143);p.AddPoint(7950,12260);p.AddPoint(6628,12798);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6548,12663);p.AddPoint(7145,12408);p.AddPoint(6873,12845);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(7143,12320);p.AddPoint(6655,12665);p.AddPoint(7158,12700);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2800,11735);p.AddPoint(2573,12033);p.AddPoint(2680,12458);p.AddPoint(2925,12608);p.AddPoint(3208,12663);p.AddPoint(3400,12413);p.AddPoint(3223,11548);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3813,11650);p.AddPoint(3725,11500);p.AddPoint(3680,11460);p.AddPoint(3550,11383);p.AddPoint(3453,11380);p.AddPoint(3213,11398);p.AddPoint(2795,11833);p.AddPoint(3260,12403);p.AddPoint(3730,11790);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(2845,11750);p.AddPoint(3125,11508);p.AddPoint(3113,11765);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8510,12795);p.AddPoint(8595,12863);p.AddPoint(8828,12893);p.AddPoint(8940,12778);p.AddPoint(8993,12210);p.AddPoint(8993,11415);p.AddPoint(8883,11413);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8158,11888);p.AddPoint(8558,11208);p.AddPoint(8890,11208);p.AddPoint(8883,12295);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8585,11975);p.AddPoint(8555,12733);p.AddPoint(8933,12228);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10130,11013);p.AddPoint(10020,10873);p.AddPoint(9998,10848);p.AddPoint(9930,10835);p.AddPoint(9858,10848);p.AddPoint(9810,10905);p.AddPoint(9718,11120);p.AddPoint(9923,11443);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9718,11120);p.AddPoint(9553,11458);p.AddPoint(9425,11863);p.AddPoint(9825,11713);p.AddPoint(10038,11193);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9888,11553);p.AddPoint(9593,12385);p.AddPoint(9328,12455);p.AddPoint(9370,12150);p.AddPoint(9428,11855);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9345,12820);p.AddPoint(9370,12985);p.AddPoint(9668,12415);p.AddPoint(9743,11953);p.AddPoint(9330,12455);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9663,12728);p.AddPoint(9673,12298);p.AddPoint(9343,12818);p.AddPoint(9373,12983);p.AddPoint(9470,13013);p.AddPoint(9530,13025);p.AddPoint(9563,13005);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9673,12990);p.AddPoint(9470,13018);p.AddPoint(9658,12590);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10390,12115);p.AddPoint(10330,12225);p.AddPoint(10355,12453);p.AddPoint(10500,12453);p.AddPoint(10673,12278);p.AddPoint(10548,12140);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11243,11253);p.AddPoint(11373,11328);p.AddPoint(11443,11473);p.AddPoint(11363,11588);p.AddPoint(11238,11675);p.AddPoint(11103,11598);p.AddPoint(11025,11463);p.AddPoint(11110,11333);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10748,13428);p.AddPoint(10820,13298);p.AddPoint(10955,13215);p.AddPoint(11090,13293);p.AddPoint(11163,13433);p.AddPoint(11080,13558);p.AddPoint(10958,13640);p.AddPoint(10820,13568);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12613,12745);p.AddPoint(12445,13025);p.AddPoint(12610,13328);p.AddPoint(12950,13318);p.AddPoint(13120,13035);p.AddPoint(12970,12745);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12998,11173);p.AddPoint(13080,11038);p.AddPoint(13203,10960);p.AddPoint(13340,11038);p.AddPoint(13413,11170);p.AddPoint(13333,11295);p.AddPoint(13205,11383);p.AddPoint(13078,11310);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11335,9768);p.AddPoint(11825,9650);p.AddPoint(12253,9605);p.AddPoint(12725,9598);p.AddPoint(12778,9655);p.AddPoint(12815,9778);p.AddPoint(12793,9863);p.AddPoint(12745,9968);p.AddPoint(11380,9985);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(10758,10435);p.AddPoint(10608,10233);p.AddPoint(10603,10103);p.AddPoint(10695,10030);p.AddPoint(10958,9900);p.AddPoint(11290,10168);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11145,10215);p.AddPoint(11888,9960);p.AddPoint(11333,9768);p.AddPoint(10953,9903);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11560,10045);p.AddPoint(12305,9955);p.AddPoint(11818,9780);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(696,156);p.AddPoint(972,300);p.AddPoint(1260,326);p.AddPoint(2948,306);p.AddPoint(3924,262);p.AddPoint(3918,34);p.AddPoint(894,48);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1016,294);p.AddPoint(836,272);p.AddPoint(720,246);p.AddPoint(566,162);p.AddPoint(406,16);p.AddPoint(1190,70);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(4550,520);p.AddPoint(4480,492);p.AddPoint(4428,456);p.AddPoint(4356,384);p.AddPoint(4372,42);p.AddPoint(7903,117);p.AddPoint(7387,503);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3663,60);p.AddPoint(4467,433);p.AddPoint(4600,73);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3620,197);p.AddPoint(4593,397);p.AddPoint(4103,113);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(6770,460);p.AddPoint(11800,590);p.AddPoint(11620,310);p.AddPoint(6730,160);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(14590,14270);p.AddPoint(14300,13380);p.AddPoint(14070,13780);p.AddPoint(14110,13940);p.AddPoint(14195,14080);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(13705,9910);p.AddPoint(13990,10600);p.AddPoint(14070,7680);p.AddPoint(13800,7420);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(13980,13540);p.AddPoint(14105,13885);p.AddPoint(14400,13760);p.AddPoint(14255,12745);p.AddPoint(13920,13010);p.AddPoint(13920,13255);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(13980,13240);p.AddPoint(13650,1940);p.AddPoint(13970,2220);p.AddPoint(14220,13310);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(5,720);p.AddPoint(93,768);p.AddPoint(103,943);p.AddPoint(25,1553);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(110,20);p.AddPoint(240,123);p.AddPoint(495,10);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(63,1235);p.AddPoint(38,1708);p.AddPoint(10,1843);p.AddPoint(10,1205);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(8,1605);p.AddPoint(13,4613);p.AddPoint(53,4618);p.AddPoint(45,1505);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(18,3795);p.AddPoint(288,4478);p.AddPoint(283,5403);p.AddPoint(20,5073);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(275,4465);p.AddPoint(320,5003);p.AddPoint(308,6140);p.AddPoint(90,6315);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(210,6170);p.AddPoint(30,6165);p.AddPoint(120,12550);p.AddPoint(310,12740);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(13020,14100);p.AddPoint(13290,14015);p.AddPoint(13360,14015);p.AddPoint(13460,14105);p.AddPoint(13505,14185);p.AddPoint(13283,14458);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(13698,14330);p.AddPoint(13343,14158);p.AddPoint(13388,14725);p.AddPoint(14105,14625);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(14483,14020);p.AddPoint(13865,14603);p.AddPoint(14445,14578);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(13780,14440);p.AddPoint(13340,14030);p.AddPoint(12310,14278);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(12705,14175);p.AddPoint(12725,14490);p.AddPoint(2010,14270);p.AddPoint(1580,13780);p.AddPoint(9425,14180);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9570,13945);p.AddPoint(9540,13925);p.AddPoint(9450,13920);p.AddPoint(7955,13930);p.AddPoint(9725,14360);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(9915,13965);p.AddPoint(9770,13945);p.AddPoint(9380,13940);p.AddPoint(9550,14425);p.AddPoint(10310,14425);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(80,12610);p.AddPoint(90,12070);p.AddPoint(2740,14420);p.AddPoint(2020,14390);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11140,280);p.AddPoint(14030,2590);p.AddPoint(14020,2180);p.AddPoint(11650,280);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(1990,3624);p.AddPoint(1954,3848);p.AddPoint(2100,3904);p.AddPoint(2258,3816);p.AddPoint(2164,3680);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(3418,2118);p.AddPoint(3518,2302);p.AddPoint(3766,2182);p.AddPoint(3638,2026);p.AddPoint(3508,2042);polygons.push_back(p);}
	{NavMesh::Polygon p;p.AddPoint(11905,10903);p.AddPoint(11790,10705);p.AddPoint(11825,10558);p.AddPoint(11963,10530);p.AddPoint(12080,10548);p.AddPoint(12170,10640);polygons.push_back(p);}

	//{NavMesh::Polygon p;p.AddPoint(6,776);p.AddPoint(6,2);p.AddPoint(58,4);p.AddPoint(42,848);polygons.push_back(p);}
	//{NavMesh::Polygon p;p.AddPoint(6,4);p.AddPoint(604,10);p.AddPoint(652,52);p.AddPoint(8,40);polygons.push_back(p);}

}

void initialize(int inflate = 0){

	genPolys();
	printf("genPolys: %d\n", (int)polygons.size());
	path_finder.AddPolygons(polygons, inflate);
	
}
std::vector<NavMesh::Point> pf(int startX, int startY, int endX, int endY){

	NavMesh::Point source_coordinates(startX, startY);
	NavMesh::Point dest_coordinates(endX, endY);
	path_finder.AddExternalPoints({ source_coordinates, dest_coordinates });
	std::vector<NavMesh::Point> path = path_finder.GetPath(source_coordinates, dest_coordinates);

	//printf("path: [%d, %d] => [%d, %d] %d\n", startX, startY, endX, endY, (int)path.size());
	for (auto& element : path) {
		//printf("%d, %d\n", element.x, element.y);
	}
	return path;
}


napi_value initialize1(napi_env env, napi_callback_info info) {
	size_t argc = 1;
	napi_value args[1];
	napi_get_cb_info(env, info, &argc, args, NULL, NULL);

	int inflate;
	napi_get_value_int32(env, args[0], &inflate);

	initialize(inflate);

	int ret = 1;

	napi_value value;
	napi_create_int32(env, ret, &value);
	return value;
}
napi_value pf1(napi_env env, napi_callback_info info) {
	size_t argc = 4;
	napi_value args[4];
	napi_get_cb_info(env, info, &argc, args, NULL, NULL);

	int startX;
	napi_get_value_int32(env, args[0], &startX);
	int startY;
	napi_get_value_int32(env, args[1], &startY);

	int endX;
	napi_get_value_int32(env, args[2], &endX);
	int endY;
	napi_get_value_int32(env, args[3], &endY);

	std::vector<NavMesh::Point> path = pf(startX, startY, endX, endY);


	Napi::Array node_array = Napi::Array::New(env, path.size());

	uint32_t i = 0;
	for(auto& point : path) {
		Napi::Object obj = Napi::Object::New(env);
		obj.Set("x", point.x);
		obj.Set("y", point.y);

		node_array[i++] = obj;
	}

	return node_array;
}
napi_value Init(napi_env env, napi_value exports) {

	napi_value fn;

	napi_create_function(env, NULL, 0, initialize1, NULL, &fn);
	napi_set_named_property(env, exports, "initialize", fn);

	napi_create_function(env, NULL, 0, pf1, NULL, &fn);
	napi_set_named_property(env, exports, "pf", fn);

	return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)

