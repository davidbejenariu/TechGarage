﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace site.DAL.Models
{
    public class OrderSummaryModel
    {
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public decimal TotalCost { get; set; }
    }
}
