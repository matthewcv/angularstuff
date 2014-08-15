using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace angularstuff.Controllers
{
    public class HomeController : Controller
    {
        [Route("{*anything}", Order = 2)]
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        [Route("Partials/{name}",Order=1)]
        public ActionResult Partials(string name)
        {
            return PartialView("Partials/" +name);
        }
    }
}
