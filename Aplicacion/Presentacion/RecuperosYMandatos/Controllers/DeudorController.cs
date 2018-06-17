using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RecuperosYMandatos.Models;

namespace RecuperosYMandatos.Controllers
{
    public class DeudorController : Controller
    {
        // GET: Deudor
        public ActionResult DeudorGetById(long ID)
        {
            Deudor unDeudor = new Deudor().GetDeudorByID(ID);
            if (unDeudor == null || unDeudor.ID == 0)
            {
                return PartialView("~/Views/Home/SinIdentificacion.cshtml");
            }
            return PartialView("~/Views/Home/DatosContacto.cshtml", unDeudor);
        }

        public ActionResult SaveOrUpdate(Deudor unDeudor)
        {
            new Deudor().SaveOrUpdate(unDeudor);
            return PartialView("~/Views/Home/ConfirmacionValidacion.cshtml");
        }

        public ActionResult Acreencias()
        {
            return PartialView();
        }
        public ActionResult ComposicionDeuda()
        {
            return View();
        }
        public ActionResult InformeDePago()
        {
            return View();
        }
        public ActionResult ComposicionPago()
        {
            return View();
        }
        public ActionResult ComposicionPago2()
        {
            return PartialView();
        }
        public ActionResult ComposicionPago3()
        {
            return PartialView();
        }
        public ActionResult ComposicionPago4()
        {
            return PartialView();
        }
        public ActionResult ComposicionPago5()
        {
            return PartialView();
        }
        public ActionResult PropuestaPago()
        {
            return PartialView();
        }
        public ActionResult PropuestaPago2()
        {
            return PartialView();
        }
    }
}