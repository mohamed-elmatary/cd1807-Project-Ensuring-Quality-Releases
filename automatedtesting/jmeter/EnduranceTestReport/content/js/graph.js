/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 608.0, "minX": 0.0, "maxY": 764.0, "series": [{"data": [[0.0, 608.0], [0.1, 608.0], [0.2, 608.0], [0.3, 608.0], [0.4, 608.0], [0.5, 608.0], [0.6, 608.0], [0.7, 608.0], [0.8, 608.0], [0.9, 608.0], [1.0, 608.0], [1.1, 608.0], [1.2, 608.0], [1.3, 608.0], [1.4, 608.0], [1.5, 608.0], [1.6, 608.0], [1.7, 608.0], [1.8, 608.0], [1.9, 608.0], [2.0, 608.0], [2.1, 608.0], [2.2, 608.0], [2.3, 608.0], [2.4, 608.0], [2.5, 608.0], [2.6, 608.0], [2.7, 608.0], [2.8, 608.0], [2.9, 608.0], [3.0, 608.0], [3.1, 608.0], [3.2, 608.0], [3.3, 608.0], [3.4, 613.0], [3.5, 613.0], [3.6, 613.0], [3.7, 613.0], [3.8, 613.0], [3.9, 613.0], [4.0, 613.0], [4.1, 613.0], [4.2, 613.0], [4.3, 613.0], [4.4, 613.0], [4.5, 613.0], [4.6, 613.0], [4.7, 613.0], [4.8, 613.0], [4.9, 613.0], [5.0, 613.0], [5.1, 613.0], [5.2, 613.0], [5.3, 613.0], [5.4, 613.0], [5.5, 613.0], [5.6, 613.0], [5.7, 613.0], [5.8, 613.0], [5.9, 613.0], [6.0, 613.0], [6.1, 613.0], [6.2, 613.0], [6.3, 613.0], [6.4, 613.0], [6.5, 613.0], [6.6, 613.0], [6.7, 617.0], [6.8, 617.0], [6.9, 617.0], [7.0, 617.0], [7.1, 617.0], [7.2, 617.0], [7.3, 617.0], [7.4, 617.0], [7.5, 617.0], [7.6, 617.0], [7.7, 617.0], [7.8, 617.0], [7.9, 617.0], [8.0, 617.0], [8.1, 617.0], [8.2, 617.0], [8.3, 617.0], [8.4, 617.0], [8.5, 617.0], [8.6, 617.0], [8.7, 617.0], [8.8, 617.0], [8.9, 617.0], [9.0, 617.0], [9.1, 617.0], [9.2, 617.0], [9.3, 617.0], [9.4, 617.0], [9.5, 617.0], [9.6, 617.0], [9.7, 617.0], [9.8, 617.0], [9.9, 617.0], [10.0, 617.0], [10.1, 617.0], [10.2, 617.0], [10.3, 617.0], [10.4, 617.0], [10.5, 617.0], [10.6, 617.0], [10.7, 617.0], [10.8, 617.0], [10.9, 617.0], [11.0, 617.0], [11.1, 617.0], [11.2, 617.0], [11.3, 617.0], [11.4, 617.0], [11.5, 617.0], [11.6, 617.0], [11.7, 617.0], [11.8, 617.0], [11.9, 617.0], [12.0, 617.0], [12.1, 617.0], [12.2, 617.0], [12.3, 617.0], [12.4, 617.0], [12.5, 617.0], [12.6, 617.0], [12.7, 617.0], [12.8, 617.0], [12.9, 617.0], [13.0, 617.0], [13.1, 617.0], [13.2, 617.0], [13.3, 617.0], [13.4, 623.0], [13.5, 623.0], [13.6, 623.0], [13.7, 623.0], [13.8, 623.0], [13.9, 623.0], [14.0, 623.0], [14.1, 623.0], [14.2, 623.0], [14.3, 623.0], [14.4, 623.0], [14.5, 623.0], [14.6, 623.0], [14.7, 623.0], [14.8, 623.0], [14.9, 623.0], [15.0, 623.0], [15.1, 623.0], [15.2, 623.0], [15.3, 623.0], [15.4, 623.0], [15.5, 623.0], [15.6, 623.0], [15.7, 623.0], [15.8, 623.0], [15.9, 623.0], [16.0, 623.0], [16.1, 623.0], [16.2, 623.0], [16.3, 623.0], [16.4, 623.0], [16.5, 623.0], [16.6, 623.0], [16.7, 624.0], [16.8, 624.0], [16.9, 624.0], [17.0, 624.0], [17.1, 624.0], [17.2, 624.0], [17.3, 624.0], [17.4, 624.0], [17.5, 624.0], [17.6, 624.0], [17.7, 624.0], [17.8, 624.0], [17.9, 624.0], [18.0, 624.0], [18.1, 624.0], [18.2, 624.0], [18.3, 624.0], [18.4, 624.0], [18.5, 624.0], [18.6, 624.0], [18.7, 624.0], [18.8, 624.0], [18.9, 624.0], [19.0, 624.0], [19.1, 624.0], [19.2, 624.0], [19.3, 624.0], [19.4, 624.0], [19.5, 624.0], [19.6, 624.0], [19.7, 624.0], [19.8, 624.0], [19.9, 624.0], [20.0, 628.0], [20.1, 628.0], [20.2, 628.0], [20.3, 628.0], [20.4, 628.0], [20.5, 628.0], [20.6, 628.0], [20.7, 628.0], [20.8, 628.0], [20.9, 628.0], [21.0, 628.0], [21.1, 628.0], [21.2, 628.0], [21.3, 628.0], [21.4, 628.0], [21.5, 628.0], [21.6, 628.0], [21.7, 628.0], [21.8, 628.0], [21.9, 628.0], [22.0, 628.0], [22.1, 628.0], [22.2, 628.0], [22.3, 628.0], [22.4, 628.0], [22.5, 628.0], [22.6, 628.0], [22.7, 628.0], [22.8, 628.0], [22.9, 628.0], [23.0, 628.0], [23.1, 628.0], [23.2, 628.0], [23.3, 628.0], [23.4, 629.0], [23.5, 629.0], [23.6, 629.0], [23.7, 629.0], [23.8, 629.0], [23.9, 629.0], [24.0, 629.0], [24.1, 629.0], [24.2, 629.0], [24.3, 629.0], [24.4, 629.0], [24.5, 629.0], [24.6, 629.0], [24.7, 629.0], [24.8, 629.0], [24.9, 629.0], [25.0, 629.0], [25.1, 629.0], [25.2, 629.0], [25.3, 629.0], [25.4, 629.0], [25.5, 629.0], [25.6, 629.0], [25.7, 629.0], [25.8, 629.0], [25.9, 629.0], [26.0, 629.0], [26.1, 629.0], [26.2, 629.0], [26.3, 629.0], [26.4, 629.0], [26.5, 629.0], [26.6, 629.0], [26.7, 629.0], [26.8, 629.0], [26.9, 629.0], [27.0, 629.0], [27.1, 629.0], [27.2, 629.0], [27.3, 629.0], [27.4, 629.0], [27.5, 629.0], [27.6, 629.0], [27.7, 629.0], [27.8, 629.0], [27.9, 629.0], [28.0, 629.0], [28.1, 629.0], [28.2, 629.0], [28.3, 629.0], [28.4, 629.0], [28.5, 629.0], [28.6, 629.0], [28.7, 629.0], [28.8, 629.0], [28.9, 629.0], [29.0, 629.0], [29.1, 629.0], [29.2, 629.0], [29.3, 629.0], [29.4, 629.0], [29.5, 629.0], [29.6, 629.0], [29.7, 629.0], [29.8, 629.0], [29.9, 629.0], [30.0, 631.0], [30.1, 631.0], [30.2, 631.0], [30.3, 631.0], [30.4, 631.0], [30.5, 631.0], [30.6, 631.0], [30.7, 631.0], [30.8, 631.0], [30.9, 631.0], [31.0, 631.0], [31.1, 631.0], [31.2, 631.0], [31.3, 631.0], [31.4, 631.0], [31.5, 631.0], [31.6, 631.0], [31.7, 631.0], [31.8, 631.0], [31.9, 631.0], [32.0, 631.0], [32.1, 631.0], [32.2, 631.0], [32.3, 631.0], [32.4, 631.0], [32.5, 631.0], [32.6, 631.0], [32.7, 631.0], [32.8, 631.0], [32.9, 631.0], [33.0, 631.0], [33.1, 631.0], [33.2, 631.0], [33.3, 631.0], [33.4, 633.0], [33.5, 633.0], [33.6, 633.0], [33.7, 633.0], [33.8, 633.0], [33.9, 633.0], [34.0, 633.0], [34.1, 633.0], [34.2, 633.0], [34.3, 633.0], [34.4, 633.0], [34.5, 633.0], [34.6, 633.0], [34.7, 633.0], [34.8, 633.0], [34.9, 633.0], [35.0, 633.0], [35.1, 633.0], [35.2, 633.0], [35.3, 633.0], [35.4, 633.0], [35.5, 633.0], [35.6, 633.0], [35.7, 633.0], [35.8, 633.0], [35.9, 633.0], [36.0, 633.0], [36.1, 633.0], [36.2, 633.0], [36.3, 633.0], [36.4, 633.0], [36.5, 633.0], [36.6, 633.0], [36.7, 634.0], [36.8, 634.0], [36.9, 634.0], [37.0, 634.0], [37.1, 634.0], [37.2, 634.0], [37.3, 634.0], [37.4, 634.0], [37.5, 634.0], [37.6, 634.0], [37.7, 634.0], [37.8, 634.0], [37.9, 634.0], [38.0, 634.0], [38.1, 634.0], [38.2, 634.0], [38.3, 634.0], [38.4, 634.0], [38.5, 634.0], [38.6, 634.0], [38.7, 634.0], [38.8, 634.0], [38.9, 634.0], [39.0, 634.0], [39.1, 634.0], [39.2, 634.0], [39.3, 634.0], [39.4, 634.0], [39.5, 634.0], [39.6, 634.0], [39.7, 634.0], [39.8, 634.0], [39.9, 634.0], [40.0, 634.0], [40.1, 634.0], [40.2, 634.0], [40.3, 634.0], [40.4, 634.0], [40.5, 634.0], [40.6, 634.0], [40.7, 634.0], [40.8, 634.0], [40.9, 634.0], [41.0, 634.0], [41.1, 634.0], [41.2, 634.0], [41.3, 634.0], [41.4, 634.0], [41.5, 634.0], [41.6, 634.0], [41.7, 634.0], [41.8, 634.0], [41.9, 634.0], [42.0, 634.0], [42.1, 634.0], [42.2, 634.0], [42.3, 634.0], [42.4, 634.0], [42.5, 634.0], [42.6, 634.0], [42.7, 634.0], [42.8, 634.0], [42.9, 634.0], [43.0, 634.0], [43.1, 634.0], [43.2, 634.0], [43.3, 634.0], [43.4, 636.0], [43.5, 636.0], [43.6, 636.0], [43.7, 636.0], [43.8, 636.0], [43.9, 636.0], [44.0, 636.0], [44.1, 636.0], [44.2, 636.0], [44.3, 636.0], [44.4, 636.0], [44.5, 636.0], [44.6, 636.0], [44.7, 636.0], [44.8, 636.0], [44.9, 636.0], [45.0, 636.0], [45.1, 636.0], [45.2, 636.0], [45.3, 636.0], [45.4, 636.0], [45.5, 636.0], [45.6, 636.0], [45.7, 636.0], [45.8, 636.0], [45.9, 636.0], [46.0, 636.0], [46.1, 636.0], [46.2, 636.0], [46.3, 636.0], [46.4, 636.0], [46.5, 636.0], [46.6, 636.0], [46.7, 637.0], [46.8, 637.0], [46.9, 637.0], [47.0, 637.0], [47.1, 637.0], [47.2, 637.0], [47.3, 637.0], [47.4, 637.0], [47.5, 637.0], [47.6, 637.0], [47.7, 637.0], [47.8, 637.0], [47.9, 637.0], [48.0, 637.0], [48.1, 637.0], [48.2, 637.0], [48.3, 637.0], [48.4, 637.0], [48.5, 637.0], [48.6, 637.0], [48.7, 637.0], [48.8, 637.0], [48.9, 637.0], [49.0, 637.0], [49.1, 637.0], [49.2, 637.0], [49.3, 637.0], [49.4, 637.0], [49.5, 637.0], [49.6, 637.0], [49.7, 637.0], [49.8, 637.0], [49.9, 637.0], [50.0, 637.0], [50.1, 639.0], [50.2, 639.0], [50.3, 639.0], [50.4, 639.0], [50.5, 639.0], [50.6, 639.0], [50.7, 639.0], [50.8, 639.0], [50.9, 639.0], [51.0, 639.0], [51.1, 639.0], [51.2, 639.0], [51.3, 639.0], [51.4, 639.0], [51.5, 639.0], [51.6, 639.0], [51.7, 639.0], [51.8, 639.0], [51.9, 639.0], [52.0, 639.0], [52.1, 639.0], [52.2, 639.0], [52.3, 639.0], [52.4, 639.0], [52.5, 639.0], [52.6, 639.0], [52.7, 639.0], [52.8, 639.0], [52.9, 639.0], [53.0, 639.0], [53.1, 639.0], [53.2, 639.0], [53.3, 639.0], [53.4, 639.0], [53.5, 639.0], [53.6, 639.0], [53.7, 639.0], [53.8, 639.0], [53.9, 639.0], [54.0, 639.0], [54.1, 639.0], [54.2, 639.0], [54.3, 639.0], [54.4, 639.0], [54.5, 639.0], [54.6, 639.0], [54.7, 639.0], [54.8, 639.0], [54.9, 639.0], [55.0, 639.0], [55.1, 639.0], [55.2, 639.0], [55.3, 639.0], [55.4, 639.0], [55.5, 639.0], [55.6, 639.0], [55.7, 639.0], [55.8, 639.0], [55.9, 639.0], [56.0, 639.0], [56.1, 639.0], [56.2, 639.0], [56.3, 639.0], [56.4, 639.0], [56.5, 639.0], [56.6, 639.0], [56.7, 640.0], [56.8, 640.0], [56.9, 640.0], [57.0, 640.0], [57.1, 640.0], [57.2, 640.0], [57.3, 640.0], [57.4, 640.0], [57.5, 640.0], [57.6, 640.0], [57.7, 640.0], [57.8, 640.0], [57.9, 640.0], [58.0, 640.0], [58.1, 640.0], [58.2, 640.0], [58.3, 640.0], [58.4, 640.0], [58.5, 640.0], [58.6, 640.0], [58.7, 640.0], [58.8, 640.0], [58.9, 640.0], [59.0, 640.0], [59.1, 640.0], [59.2, 640.0], [59.3, 640.0], [59.4, 640.0], [59.5, 640.0], [59.6, 640.0], [59.7, 640.0], [59.8, 640.0], [59.9, 640.0], [60.0, 640.0], [60.1, 643.0], [60.2, 643.0], [60.3, 643.0], [60.4, 643.0], [60.5, 643.0], [60.6, 643.0], [60.7, 643.0], [60.8, 643.0], [60.9, 643.0], [61.0, 643.0], [61.1, 643.0], [61.2, 643.0], [61.3, 643.0], [61.4, 643.0], [61.5, 643.0], [61.6, 643.0], [61.7, 643.0], [61.8, 643.0], [61.9, 643.0], [62.0, 643.0], [62.1, 643.0], [62.2, 643.0], [62.3, 643.0], [62.4, 643.0], [62.5, 643.0], [62.6, 643.0], [62.7, 643.0], [62.8, 643.0], [62.9, 643.0], [63.0, 643.0], [63.1, 643.0], [63.2, 643.0], [63.3, 643.0], [63.4, 643.0], [63.5, 643.0], [63.6, 643.0], [63.7, 643.0], [63.8, 643.0], [63.9, 643.0], [64.0, 643.0], [64.1, 643.0], [64.2, 643.0], [64.3, 643.0], [64.4, 643.0], [64.5, 643.0], [64.6, 643.0], [64.7, 643.0], [64.8, 643.0], [64.9, 643.0], [65.0, 643.0], [65.1, 643.0], [65.2, 643.0], [65.3, 643.0], [65.4, 643.0], [65.5, 643.0], [65.6, 643.0], [65.7, 643.0], [65.8, 643.0], [65.9, 643.0], [66.0, 643.0], [66.1, 643.0], [66.2, 643.0], [66.3, 643.0], [66.4, 643.0], [66.5, 643.0], [66.6, 643.0], [66.7, 643.0], [66.8, 643.0], [66.9, 643.0], [67.0, 643.0], [67.1, 643.0], [67.2, 643.0], [67.3, 643.0], [67.4, 643.0], [67.5, 643.0], [67.6, 643.0], [67.7, 643.0], [67.8, 643.0], [67.9, 643.0], [68.0, 643.0], [68.1, 643.0], [68.2, 643.0], [68.3, 643.0], [68.4, 643.0], [68.5, 643.0], [68.6, 643.0], [68.7, 643.0], [68.8, 643.0], [68.9, 643.0], [69.0, 643.0], [69.1, 643.0], [69.2, 643.0], [69.3, 643.0], [69.4, 643.0], [69.5, 643.0], [69.6, 643.0], [69.7, 643.0], [69.8, 643.0], [69.9, 643.0], [70.0, 644.0], [70.1, 644.0], [70.2, 644.0], [70.3, 644.0], [70.4, 644.0], [70.5, 644.0], [70.6, 644.0], [70.7, 644.0], [70.8, 644.0], [70.9, 644.0], [71.0, 644.0], [71.1, 644.0], [71.2, 644.0], [71.3, 644.0], [71.4, 644.0], [71.5, 644.0], [71.6, 644.0], [71.7, 644.0], [71.8, 644.0], [71.9, 644.0], [72.0, 644.0], [72.1, 644.0], [72.2, 644.0], [72.3, 644.0], [72.4, 644.0], [72.5, 644.0], [72.6, 644.0], [72.7, 644.0], [72.8, 644.0], [72.9, 644.0], [73.0, 644.0], [73.1, 644.0], [73.2, 644.0], [73.3, 644.0], [73.4, 645.0], [73.5, 645.0], [73.6, 645.0], [73.7, 645.0], [73.8, 645.0], [73.9, 645.0], [74.0, 645.0], [74.1, 645.0], [74.2, 645.0], [74.3, 645.0], [74.4, 645.0], [74.5, 645.0], [74.6, 645.0], [74.7, 645.0], [74.8, 645.0], [74.9, 645.0], [75.0, 645.0], [75.1, 645.0], [75.2, 645.0], [75.3, 645.0], [75.4, 645.0], [75.5, 645.0], [75.6, 645.0], [75.7, 645.0], [75.8, 645.0], [75.9, 645.0], [76.0, 645.0], [76.1, 645.0], [76.2, 645.0], [76.3, 645.0], [76.4, 645.0], [76.5, 645.0], [76.6, 645.0], [76.7, 645.0], [76.8, 645.0], [76.9, 645.0], [77.0, 645.0], [77.1, 645.0], [77.2, 645.0], [77.3, 645.0], [77.4, 645.0], [77.5, 645.0], [77.6, 645.0], [77.7, 645.0], [77.8, 645.0], [77.9, 645.0], [78.0, 645.0], [78.1, 645.0], [78.2, 645.0], [78.3, 645.0], [78.4, 645.0], [78.5, 645.0], [78.6, 645.0], [78.7, 645.0], [78.8, 645.0], [78.9, 645.0], [79.0, 645.0], [79.1, 645.0], [79.2, 645.0], [79.3, 645.0], [79.4, 645.0], [79.5, 645.0], [79.6, 645.0], [79.7, 645.0], [79.8, 645.0], [79.9, 645.0], [80.0, 648.0], [80.1, 648.0], [80.2, 648.0], [80.3, 648.0], [80.4, 648.0], [80.5, 648.0], [80.6, 648.0], [80.7, 648.0], [80.8, 648.0], [80.9, 648.0], [81.0, 648.0], [81.1, 648.0], [81.2, 648.0], [81.3, 648.0], [81.4, 648.0], [81.5, 648.0], [81.6, 648.0], [81.7, 648.0], [81.8, 648.0], [81.9, 648.0], [82.0, 648.0], [82.1, 648.0], [82.2, 648.0], [82.3, 648.0], [82.4, 648.0], [82.5, 648.0], [82.6, 648.0], [82.7, 648.0], [82.8, 648.0], [82.9, 648.0], [83.0, 648.0], [83.1, 648.0], [83.2, 648.0], [83.3, 648.0], [83.4, 648.0], [83.5, 648.0], [83.6, 648.0], [83.7, 648.0], [83.8, 648.0], [83.9, 648.0], [84.0, 648.0], [84.1, 648.0], [84.2, 648.0], [84.3, 648.0], [84.4, 648.0], [84.5, 648.0], [84.6, 648.0], [84.7, 648.0], [84.8, 648.0], [84.9, 648.0], [85.0, 648.0], [85.1, 648.0], [85.2, 648.0], [85.3, 648.0], [85.4, 648.0], [85.5, 648.0], [85.6, 648.0], [85.7, 648.0], [85.8, 648.0], [85.9, 648.0], [86.0, 648.0], [86.1, 648.0], [86.2, 648.0], [86.3, 648.0], [86.4, 648.0], [86.5, 648.0], [86.6, 648.0], [86.7, 654.0], [86.8, 654.0], [86.9, 654.0], [87.0, 654.0], [87.1, 654.0], [87.2, 654.0], [87.3, 654.0], [87.4, 654.0], [87.5, 654.0], [87.6, 654.0], [87.7, 654.0], [87.8, 654.0], [87.9, 654.0], [88.0, 654.0], [88.1, 654.0], [88.2, 654.0], [88.3, 654.0], [88.4, 654.0], [88.5, 654.0], [88.6, 654.0], [88.7, 654.0], [88.8, 654.0], [88.9, 654.0], [89.0, 654.0], [89.1, 654.0], [89.2, 654.0], [89.3, 654.0], [89.4, 654.0], [89.5, 654.0], [89.6, 654.0], [89.7, 654.0], [89.8, 654.0], [89.9, 654.0], [90.0, 662.0], [90.1, 662.0], [90.2, 662.0], [90.3, 662.0], [90.4, 662.0], [90.5, 662.0], [90.6, 662.0], [90.7, 662.0], [90.8, 662.0], [90.9, 662.0], [91.0, 662.0], [91.1, 662.0], [91.2, 662.0], [91.3, 662.0], [91.4, 662.0], [91.5, 662.0], [91.6, 662.0], [91.7, 662.0], [91.8, 662.0], [91.9, 662.0], [92.0, 662.0], [92.1, 662.0], [92.2, 662.0], [92.3, 662.0], [92.4, 662.0], [92.5, 662.0], [92.6, 662.0], [92.7, 662.0], [92.8, 662.0], [92.9, 662.0], [93.0, 662.0], [93.1, 662.0], [93.2, 662.0], [93.3, 662.0], [93.4, 760.0], [93.5, 760.0], [93.6, 760.0], [93.7, 760.0], [93.8, 760.0], [93.9, 760.0], [94.0, 760.0], [94.1, 760.0], [94.2, 760.0], [94.3, 760.0], [94.4, 760.0], [94.5, 760.0], [94.6, 760.0], [94.7, 760.0], [94.8, 760.0], [94.9, 760.0], [95.0, 760.0], [95.1, 760.0], [95.2, 760.0], [95.3, 760.0], [95.4, 760.0], [95.5, 760.0], [95.6, 760.0], [95.7, 760.0], [95.8, 760.0], [95.9, 760.0], [96.0, 760.0], [96.1, 760.0], [96.2, 760.0], [96.3, 760.0], [96.4, 760.0], [96.5, 760.0], [96.6, 760.0], [96.7, 764.0], [96.8, 764.0], [96.9, 764.0], [97.0, 764.0], [97.1, 764.0], [97.2, 764.0], [97.3, 764.0], [97.4, 764.0], [97.5, 764.0], [97.6, 764.0], [97.7, 764.0], [97.8, 764.0], [97.9, 764.0], [98.0, 764.0], [98.1, 764.0], [98.2, 764.0], [98.3, 764.0], [98.4, 764.0], [98.5, 764.0], [98.6, 764.0], [98.7, 764.0], [98.8, 764.0], [98.9, 764.0], [99.0, 764.0], [99.1, 764.0], [99.2, 764.0], [99.3, 764.0], [99.4, 764.0], [99.5, 764.0], [99.6, 764.0], [99.7, 764.0], [99.8, 764.0], [99.9, 764.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 600.0, "maxY": 28.0, "series": [{"data": [[600.0, 28.0], [700.0, 2.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 30.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 30.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 30.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.74746352E12, "maxY": 1.0, "series": [{"data": [[1.74746358E12, 1.0], [1.74746352E12, 1.0]], "isOverall": false, "label": "Starter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74746358E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 643.6666666666664, "minX": 1.0, "maxY": 643.6666666666664, "series": [{"data": [[1.0, 643.6666666666664]], "isOverall": false, "label": "GET All Activities", "isController": false}, {"data": [[1.0, 643.6666666666664]], "isOverall": false, "label": "GET All Activities-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 33.016666666666666, "minX": 1.74746352E12, "maxY": 117.76666666666667, "series": [{"data": [[1.74746358E12, 117.76666666666667], [1.74746352E12, 58.56666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74746358E12, 66.33333333333333], [1.74746352E12, 33.016666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74746358E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 640.8, "minX": 1.74746352E12, "maxY": 649.4, "series": [{"data": [[1.74746358E12, 640.8], [1.74746352E12, 649.4]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74746358E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 640.6999999999999, "minX": 1.74746352E12, "maxY": 649.3, "series": [{"data": [[1.74746358E12, 640.6999999999999], [1.74746352E12, 649.3]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74746358E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 431.0999999999999, "minX": 1.74746352E12, "maxY": 435.2, "series": [{"data": [[1.74746358E12, 431.0999999999999], [1.74746352E12, 435.2]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74746358E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 608.0, "minX": 1.74746352E12, "maxY": 764.0, "series": [{"data": [[1.74746358E12, 764.0], [1.74746352E12, 760.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74746358E12, 660.6], [1.74746352E12, 749.4000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74746358E12, 764.0], [1.74746352E12, 760.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74746358E12, 758.8999999999999], [1.74746352E12, 760.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74746358E12, 608.0], [1.74746352E12, 617.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74746358E12, 638.0], [1.74746352E12, 640.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74746358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 638.0, "minX": 1.0, "maxY": 638.0, "series": [{"data": [[1.0, 638.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 638.0, "minX": 1.0, "maxY": 638.0, "series": [{"data": [[1.0, 638.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.74746352E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.74746358E12, 0.3333333333333333], [1.74746352E12, 0.16666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74746358E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.74746352E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.74746358E12, 0.3333333333333333], [1.74746352E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74746358E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.74746352E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.74746358E12, 0.3333333333333333], [1.74746352E12, 0.16666666666666666]], "isOverall": false, "label": "GET All Activities-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74746358E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.74746352E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.74746358E12, 0.3333333333333333], [1.74746352E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74746358E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

