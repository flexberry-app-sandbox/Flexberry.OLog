﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.OLog
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Журнал учета.
    /// </summary>
    // *** Start programmer edit section *** (ЖурналУчета CustomAttributes)

    // *** End programmer edit section *** (ЖурналУчета CustomAttributes)
    [AutoAltered()]
    [Caption("Журнал учета")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЖурналУчетаE", new string[] {
            "Пробег as \'Пробег\'",
            "ФИО as \'ФИО\'",
            "ВремяВыезда as \'Время выезда\'",
            "ПоказСпидом as \'Показ спидом\'",
            "ВремяВозвр as \'Время возвр\'",
            "Примечания as \'Примечания\'",
            "Дата as \'Дата\'"})]
    [View("ЖурналУчетаL", new string[] {
            "Пробег as \'Пробег\'",
            "ФИО as \'ФИО\'",
            "ВремяВыезда as \'Время выезда\'",
            "ПоказСпидом as \'Показ спидом\'",
            "ВремяВозвр as \'Время возвр\'",
            "Примечания as \'Примечания\'",
            "Дата as \'Дата\'"})]
    public class ЖурналУчета : ICSSoft.STORMNET.DataObject
    {
        
        private double fПробег;
        
        private string fФИО;
        
        private System.DateTime fВремяВыезда;
        
        private double fПоказСпидом;
        
        private System.DateTime fВремяВозвр;
        
        private string fПримечания;
        
        private System.DateTime fДата;
        
        private IIS.OLog.ТранспСр fТранспСр;
        
        // *** Start programmer edit section *** (ЖурналУчета CustomMembers)

        // *** End programmer edit section *** (ЖурналУчета CustomMembers)

        
        /// <summary>
        /// ВремяВозвр.
        /// </summary>
        // *** Start programmer edit section *** (ЖурналУчета.ВремяВозвр CustomAttributes)

        // *** End programmer edit section *** (ЖурналУчета.ВремяВозвр CustomAttributes)
        public virtual System.DateTime ВремяВозвр
        {
            get
            {
                // *** Start programmer edit section *** (ЖурналУчета.ВремяВозвр Get start)

                // *** End programmer edit section *** (ЖурналУчета.ВремяВозвр Get start)
                System.DateTime result = this.fВремяВозвр;
                // *** Start programmer edit section *** (ЖурналУчета.ВремяВозвр Get end)

                // *** End programmer edit section *** (ЖурналУчета.ВремяВозвр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЖурналУчета.ВремяВозвр Set start)

                // *** End programmer edit section *** (ЖурналУчета.ВремяВозвр Set start)
                this.fВремяВозвр = value;
                // *** Start programmer edit section *** (ЖурналУчета.ВремяВозвр Set end)

                // *** End programmer edit section *** (ЖурналУчета.ВремяВозвр Set end)
            }
        }
        
        /// <summary>
        /// ВремяВыезда.
        /// </summary>
        // *** Start programmer edit section *** (ЖурналУчета.ВремяВыезда CustomAttributes)

        // *** End programmer edit section *** (ЖурналУчета.ВремяВыезда CustomAttributes)
        public virtual System.DateTime ВремяВыезда
        {
            get
            {
                // *** Start programmer edit section *** (ЖурналУчета.ВремяВыезда Get start)

                // *** End programmer edit section *** (ЖурналУчета.ВремяВыезда Get start)
                System.DateTime result = this.fВремяВыезда;
                // *** Start programmer edit section *** (ЖурналУчета.ВремяВыезда Get end)

                // *** End programmer edit section *** (ЖурналУчета.ВремяВыезда Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЖурналУчета.ВремяВыезда Set start)

                // *** End programmer edit section *** (ЖурналУчета.ВремяВыезда Set start)
                this.fВремяВыезда = value;
                // *** Start programmer edit section *** (ЖурналУчета.ВремяВыезда Set end)

                // *** End programmer edit section *** (ЖурналУчета.ВремяВыезда Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ЖурналУчета.Дата CustomAttributes)

        // *** End programmer edit section *** (ЖурналУчета.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ЖурналУчета.Дата Get start)

                // *** End programmer edit section *** (ЖурналУчета.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ЖурналУчета.Дата Get end)

                // *** End programmer edit section *** (ЖурналУчета.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЖурналУчета.Дата Set start)

                // *** End programmer edit section *** (ЖурналУчета.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ЖурналУчета.Дата Set end)

                // *** End programmer edit section *** (ЖурналУчета.Дата Set end)
            }
        }
        
        /// <summary>
        /// ПоказСпидом.
        /// </summary>
        // *** Start programmer edit section *** (ЖурналУчета.ПоказСпидом CustomAttributes)

        // *** End programmer edit section *** (ЖурналУчета.ПоказСпидом CustomAttributes)
        public virtual double ПоказСпидом
        {
            get
            {
                // *** Start programmer edit section *** (ЖурналУчета.ПоказСпидом Get start)

                // *** End programmer edit section *** (ЖурналУчета.ПоказСпидом Get start)
                double result = this.fПоказСпидом;
                // *** Start programmer edit section *** (ЖурналУчета.ПоказСпидом Get end)

                // *** End programmer edit section *** (ЖурналУчета.ПоказСпидом Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЖурналУчета.ПоказСпидом Set start)

                // *** End programmer edit section *** (ЖурналУчета.ПоказСпидом Set start)
                this.fПоказСпидом = value;
                // *** Start programmer edit section *** (ЖурналУчета.ПоказСпидом Set end)

                // *** End programmer edit section *** (ЖурналУчета.ПоказСпидом Set end)
            }
        }
        
        /// <summary>
        /// Примечания.
        /// </summary>
        // *** Start programmer edit section *** (ЖурналУчета.Примечания CustomAttributes)

        // *** End programmer edit section *** (ЖурналУчета.Примечания CustomAttributes)
        [StrLen(255)]
        public virtual string Примечания
        {
            get
            {
                // *** Start programmer edit section *** (ЖурналУчета.Примечания Get start)

                // *** End programmer edit section *** (ЖурналУчета.Примечания Get start)
                string result = this.fПримечания;
                // *** Start programmer edit section *** (ЖурналУчета.Примечания Get end)

                // *** End programmer edit section *** (ЖурналУчета.Примечания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЖурналУчета.Примечания Set start)

                // *** End programmer edit section *** (ЖурналУчета.Примечания Set start)
                this.fПримечания = value;
                // *** Start programmer edit section *** (ЖурналУчета.Примечания Set end)

                // *** End programmer edit section *** (ЖурналУчета.Примечания Set end)
            }
        }
        
        /// <summary>
        /// Пробег.
        /// </summary>
        // *** Start programmer edit section *** (ЖурналУчета.Пробег CustomAttributes)

        // *** End programmer edit section *** (ЖурналУчета.Пробег CustomAttributes)
        public virtual double Пробег
        {
            get
            {
                // *** Start programmer edit section *** (ЖурналУчета.Пробег Get start)

                // *** End programmer edit section *** (ЖурналУчета.Пробег Get start)
                double result = this.fПробег;
                // *** Start programmer edit section *** (ЖурналУчета.Пробег Get end)

                // *** End programmer edit section *** (ЖурналУчета.Пробег Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЖурналУчета.Пробег Set start)

                // *** End programmer edit section *** (ЖурналУчета.Пробег Set start)
                this.fПробег = value;
                // *** Start programmer edit section *** (ЖурналУчета.Пробег Set end)

                // *** End programmer edit section *** (ЖурналУчета.Пробег Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (ЖурналУчета.ФИО CustomAttributes)

        // *** End programmer edit section *** (ЖурналУчета.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (ЖурналУчета.ФИО Get start)

                // *** End programmer edit section *** (ЖурналУчета.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (ЖурналУчета.ФИО Get end)

                // *** End programmer edit section *** (ЖурналУчета.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЖурналУчета.ФИО Set start)

                // *** End programmer edit section *** (ЖурналУчета.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (ЖурналУчета.ФИО Set end)

                // *** End programmer edit section *** (ЖурналУчета.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Журнал учета.
        /// </summary>
        // *** Start programmer edit section *** (ЖурналУчета.ТранспСр CustomAttributes)

        // *** End programmer edit section *** (ЖурналУчета.ТранспСр CustomAttributes)
        [PropertyStorage(new string[] {
                "ТранспСр"})]
        [NotNull()]
        public virtual IIS.OLog.ТранспСр ТранспСр
        {
            get
            {
                // *** Start programmer edit section *** (ЖурналУчета.ТранспСр Get start)

                // *** End programmer edit section *** (ЖурналУчета.ТранспСр Get start)
                IIS.OLog.ТранспСр result = this.fТранспСр;
                // *** Start programmer edit section *** (ЖурналУчета.ТранспСр Get end)

                // *** End programmer edit section *** (ЖурналУчета.ТранспСр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЖурналУчета.ТранспСр Set start)

                // *** End programmer edit section *** (ЖурналУчета.ТранспСр Set start)
                this.fТранспСр = value;
                // *** Start programmer edit section *** (ЖурналУчета.ТранспСр Set end)

                // *** End programmer edit section *** (ЖурналУчета.ТранспСр Set end)
            }
        }
        
        // *** Start programmer edit section *** (ЖурналУчета.Отправить CustomAttributes)

        // *** End programmer edit section *** (ЖурналУчета.Отправить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Отправить()
        {
            // *** Start programmer edit section *** (ЖурналУчета.Отправить method implementation)

            return;
            // *** End programmer edit section *** (ЖурналУчета.Отправить method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЖурналУчетаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЖурналУчетаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЖурналУчетаE", typeof(IIS.OLog.ЖурналУчета));
                }
            }
            
            /// <summary>
            /// "ЖурналУчетаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЖурналУчетаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЖурналУчетаL", typeof(IIS.OLog.ЖурналУчета));
                }
            }
        }
    }
}
